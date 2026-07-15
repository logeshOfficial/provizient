# Design Document: Contact Form Mailbox Integration

## Overview

The Contact Form Mailbox Integration feature enhances ProVizient's existing contact form to ensure reliable email delivery to the corporate mailbox (`info@provizient.com`) and automatic confirmation emails to users. The design builds on the existing infrastructure:

- **Frontend**: React contact form component (`src/components/forms/contact-form.tsx`) with `react-hook-form` + `zod` validation
- **Backend**: Azure Static Web Apps serverless function (`/api/contact/`)
- **Email Service**: Authenticated SMTP service layer (`/api/shared/email.js`) using Nodemailer or similar SMTP client library

This feature introduces robust validation, error handling, retry logic, rate limiting, comprehensive logging, and monitoring to make contact form submissions production-ready.

---

## Architecture

### High-Level Flow

```
User submits form
    ↓
Client-side validation (Zod schema) ← Rejects invalid input
    ↓
Demo mode check → "true" → Mock response (600ms delay) → Toast
    ↓ (else)
POST /api/contact with validated data
    ↓
API: Validate required fields
    ↓
API: Log incoming request (timestamp, IP)
    ↓
API: Sanitize user input (escape HTML chars, validate email format)
    ↓
API: Check rate limit (5 requests per IP per 5 min) ← Rate limit exceeded → 429
    ↓
API: Send notification email to info@provizient.com
    ├─→ Retry logic: Up to 2 retries with exponential backoff (1s, 2s)
    └─→ Log failure immediately if fails
    ↓
API: Send confirmation email to user's email address
    ├─→ If fails: Log separately, don't block notification
    └─→ Log success/failure
    ↓
API Response:
    ├─→ Both succeed: HTTP 200 {"success": true}
    ├─→ Any fails: HTTP 500 with error message + logging
    ↓
Client: Display toast (success or error)
    ↓
Client: Clear form (on success)
```

### Component Interactions

```
ContactForm.tsx (Client)
    ├─ useForm() + Zod validation schema
    ├─ Demo mode detection (NEXT_PUBLIC_DEMO_MODE env var)
    ├─ POST /api/contact (production mode)
    └─ Toast notifications (success/error)

/api/contact/index.js (Serverless Function)
    ├─ Request validation (required fields, HTTP method, CORS)
    ├─ Input sanitization (HTML escaping, email validation)
    ├─ Rate limiting (IP-based, 5 per 5 min)
    ├─ Logging (request, errors, success)
    └─ Email orchestration
        ├─ sendEmail() to notification address
        │   └─ Retry logic (2 retries, exponential backoff)
        └─ sendEmail() to user address
            └─ Independent failure handling

/api/shared/email.js (Email Service Layer)
    ├─ Input sanitization (HTML special char escaping)
    ├─ Authenticated SMTP connection (via Nodemailer or similar)
    ├─ Connection pooling & credential management
    ├─ Error handling with connection retry
    └─ Branded sender identity
```

### Data Flow

**Form Submission Payload:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "phone": "+1 (555) 000-0000",
  "subject": "Inquiry about AI consulting",
  "message": "We are interested in your AI solutions...",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Notification Email Payload:**
```
To: info@provizient.com
From: ProVizient <noreply@provizient.com>
Subject: New Contact Inquiry: Inquiry about AI consulting

HTML body includes:
- Sender Name: John Doe
- Sender Email: john@example.com
- Company: Acme Corp
- Phone: +1 (555) 000-0000
- Subject: Inquiry about AI consulting
- Message: (with HTML escaping)
```

**Confirmation Email Payload:**
```
To: john@example.com
From: ProVizient <noreply@provizient.com>
Subject: Thank you for contacting ProVizient

HTML body includes:
- Greeting with first name
- Acknowledgment of message receipt
- Response time expectation (24 business hours)
- Professional closing
- NO message body or sensitive personal details
```

---

## Components and Interfaces

### Frontend: ContactForm Component

**Location:** `src/components/forms/contact-form.tsx`

**Responsibilities:**
1. Render form fields with labels and error messages
2. Perform client-side validation using Zod schema
3. Check `NEXT_PUBLIC_DEMO_MODE` environment variable
4. Make POST request to `/api/contact` (if not in demo mode)
5. Display toast notifications for success/error
6. Manage loading state with button feedback
7. Clear form fields on successful submission
8. Persist minimum 600ms loading state for perceived intent

**Key Implementation Details:**
```typescript
// Validation schema includes field length constraints
const contactSchema = z.object({
  name: z.string().min(2).max(500),
  email: z.string().email(),
  company: z.string().max(500).optional(),
  phone: z.string().max(500).optional(),
  subject: z.string().min(3).max(500),
  message: z.string().min(10).max(5000),
});

// Demo mode: Simulate 600ms delay, show demo toast, no API call
if (process.env.NEXT_PUBLIC_DEMO_MODE === "true") {
  await delay(600);
  toast({ title: "Demo: message received!", ... });
  reset();
  return;
}

// Production mode: POST to API, show success/error toast
const res = await fetch("/api/contact", { method: "POST", ... });
```

### Backend: Contact API Endpoint

**Location:** `/api/contact/index.js`

**Responsibilities:**
1. Handle HTTP method routing (POST, OPTIONS, reject others)
2. Validate required fields exist and are non-empty
3. Log incoming requests with timestamp and source IP
4. Sanitize user input (HTML escaping, email validation)
5. Check rate limits (5 requests per IP per 5-minute window)
6. Orchestrate email delivery (notification + confirmation)
7. Implement retry logic for notification email (2 retries, exponential backoff)
8. Handle partial failures (one email succeeds, one fails = overall failure)
9. Return appropriate HTTP status codes and messages
10. Log all errors and successes in structured JSON format

**HTTP Interface:**
```
POST /api/contact
Content-Type: application/json

Request body:
{
  "name": "string (2-500 chars)",
  "email": "string (valid email)",
  "company": "string (0-500 chars, optional)",
  "phone": "string (0-500 chars, optional)",
  "subject": "string (3-500 chars)",
  "message": "string (10-5000 chars)"
}

Response (Success - 200):
{
  "success": true
}

Response (Missing fields - 400):
{
  "message": "Missing required fields"
}

Response (Rate limited - 429):
{
  "message": "Too many requests. Please try again in a few minutes."
}

Response (Email delivery failed - 500):
{
  "message": "Failed to process contact form. Please contact support or try again."
}

OPTIONS request (CORS preflight):
Response: HTTP 204 with CORS headers
```

### Email Service Layer

**Location:** `/api/shared/email.js`

**Responsibilities:**
1. Accept email parameters (to, subject, html)
2. Sanitize HTML content (escape `< > & " '`)
3. Validate recipient email address
4. Build email payload with branded from address
5. Establish authenticated SMTP connection
6. Send email via configured SMTP server
7. Return success/failure response
8. Throw errors on failure (caught by API endpoint)

**Configuration:**
- `SMTP_HOST`: SMTP server hostname (e.g., smtp.gmail.com, smtp.sendgrid.net)
- `SMTP_PORT`: SMTP server port (typically 587 for TLS or 465 for SSL)
- `SMTP_USER`: Authentication username
- `SMTP_PASSWORD`: Authentication password
- `SMTP_FROM_EMAIL`: From address for all emails (default: `"ProVizient <noreply@provizient.com>"`, configurable via env)
- `NOTIFICATION_EMAIL`: Default `"info@provizient.com"` (configurable via env)
- `SMTP_USE_TLS`: Enable TLS security (default: true for port 587)
- `SMTP_USE_SSL`: Enable SSL security (default: true for port 465)

**Functions:**
```javascript
async function sendEmail({ to, subject, html }) {
  // Validates SMTP credentials exist
  // Sanitizes HTML content
  // Validates recipient
  // Creates SMTP transporter with connection pooling
  // Sends email via authenticated SMTP
  // Returns { success: true } or throws error with detailed reason
}
```

**SMTP Connection Details:**
- Connection pooling: Reuse SMTP connections across multiple emails (improves throughput)
- Timeout handling: Configurable timeout for SMTP operations (default: 30s)
- Error recovery: Automatic connection retry on transient failures (up to 2 retries)
- TLS/SSL support: Configurable security based on SMTP provider requirements

---

## Data Models

### Validation Schema (Zod)

```typescript
// Client-side validation (ContactForm.tsx)
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(500, "Name must not exceed 500 characters"),
  email: z
    .string()
    .email("Please enter a valid email")
    .max(500, "Email must not exceed 500 characters"),
  company: z
    .string()
    .max(500, "Company must not exceed 500 characters")
    .optional(),
  phone: z
    .string()
    .max(500, "Phone must not exceed 500 characters")
    .optional(),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(500, "Subject must not exceed 500 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must not exceed 5000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;
```

### Rate Limiter State (In-Memory or Redis)

For production, use Redis or similar distributed cache. For development, in-memory Map:

```typescript
// Key: IP address
// Value: Array of timestamps (last 5 minutes of requests)
const rateLimitStore = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const fiveMinutesAgo = now - 5 * 60 * 1000;
  
  const timestamps = rateLimitStore.get(ip) || [];
  const recentRequests = timestamps.filter((t) => t > fiveMinutesAgo);
  
  if (recentRequests.length >= 5) {
    return true;
  }
  
  recentRequests.push(now);
  rateLimitStore.set(ip, recentRequests);
  return false;
}
```

### Structured Log Format (JSON)

```json
{
  "timestamp": "2024-01-15T10:30:00Z",
  "level": "info|error",
  "event": "form_submission|email_sent|email_failed|rate_limit|validation_error",
  "user_email": "john@example.com",
  "source_ip": "192.168.1.1",
  "success": true,
  "notification_sent": true,
  "confirmation_sent": true,
  "error_reason": null,
  "retry_count": 0,
  "response_time_ms": 245,
  "submission_id": "uuid-123"
}
```

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Field Validation Accepts Valid Data

*For any* form submission where all required fields meet length and format constraints (name ≥ 2 chars, email valid format, subject ≥ 3 chars, message 10–5000 chars, optional fields ≤ 500 chars), the Zod validation schema SHALL accept the submission without errors.

**Validates: Requirements 1.1**

### Property 2: Field Validation Rejects Invalid Data

*For any* form submission where at least one required field violates constraints (name < 2 chars, invalid email format, subject < 3 chars, message < 10 or > 5000 chars, any field > 500 chars except message), the Zod validation schema SHALL reject the submission with a specific error message for that field.

**Validates: Requirements 1.1, 1.4, 1.5**

### Property 3: Email Subject Line Format

*For any* user-provided subject text, the notification email subject line SHALL always be formatted as `"New Contact Inquiry: " + subject`.

**Validates: Requirements 3.3**

### Property 4: HTML Special Character Sanitization

*For any* user-provided text field containing HTML special characters (`<`, `>`, `&`, `"`, `'`), the sanitization function SHALL escape each character to its corresponding HTML entity (`&lt;`, `&gt;`, `&amp;`, `&quot;`, `&#x27;`).

**Validates: Requirements 8.1, 8.2**

### Property 5: Email Validation

*For any* email address, the validation regex SHALL accept RFC 5322 compliant formats (standard email pattern) and reject known invalid patterns (missing @, missing domain, special characters without escaping).

**Validates: Requirements 8.3**

### Property 6: SMTP Header Injection Prevention

*For any* user-provided email address containing SMTP header injection markers (`\r\n`, `%0a`, `%0d`), the email validation function SHALL reject the submission as invalid.

**Validates: Requirements 8.5**

### Property 7: Confirmation Email Privacy

*For any* form submission, the confirmation email body SHALL never include the user's submitted message body or personal details beyond the first name (company, phone, or full message SHALL NOT appear).

**Validates: Requirements 4.6**

### Property 8: Rate Limit Algorithm

*For any* sequence of requests from the same IP address, if ≤ 5 requests occur within a 5-minute window, all SHALL be allowed; if a 6th request arrives within the same window, it SHALL be rate-limited (HTTP 429 response).

**Validates: Requirements 8.6**

---

## Error Handling

### Client-Side (Frontend)

1. **Validation Errors**: Display inline below the field in red text with `role="alert"` for screen reader accessibility. Disable submit button.
2. **API Errors (4xx/5xx)**: Display destructive (red) toast with API error message or "Something went wrong" fallback.
3. **Network Timeouts**: Display error toast and suggest contacting support.
4. **Demo Mode Feedback**: Display success toast with demo message.

### Server-Side (API)

1. **Missing Required Fields**: Return HTTP 400 with message "Missing required fields".
2. **Invalid HTTP Method**: Return HTTP 405 (Method Not Allowed).
3. **CORS Preflight**: Return HTTP 204 with CORS headers.
4. **Rate Limit Exceeded**: Return HTTP 429 with message "Too many requests. Please try again in a few minutes."
5. **Email Delivery Failure (after retries)**: Return HTTP 500 with message "Failed to process contact form. Please contact support or try again."
6. **Unexpected Server Error**: Return HTTP 500 with generic message (do not expose internal errors to client).

### Logging on Errors

- **Validation Errors**: Log field name and constraint violated (non-sensitive).
- **Email Delivery Failures**: Log complete error with timestamp, error type, email recipient, retry count, user email (for audit).
- **Rate Limit**: Log IP address and timestamp.
- **Unexpected Errors**: Log full error stack trace (server logs only, not sent to client).

---

## Testing Strategy

### Unit Tests (Example-Based)

Focus on concrete scenarios and edge cases:

1. **Form Validation**:
   - Valid submission with all fields
   - Missing each required field individually
   - Invalid email format (e.g., "notanemail", "user@", "@domain.com")
   - Fields at boundary lengths (2, 500, 5000 chars)
   - SQL injection patterns in email field
   - SMTP header injection markers

2. **Email Composition**:
   - Notification email includes all required fields
   - Confirmation email does NOT include message body
   - Subject line formatting is correct
   - HTML sanitization escapes special characters

3. **API Responses**:
   - HTTP 200 on successful submission
   - HTTP 400 for missing required fields
   - HTTP 405 for GET/PUT/DELETE
   - HTTP 204 for OPTIONS
   - HTTP 429 for rate limit exceeded
   - HTTP 500 for email delivery failure

4. **Demo Mode**:
   - Form submission simulates 600ms delay
   - Toast message appears with correct text
   - No API call is made
   - Form fields are cleared
   - Validation still works

5. **Error Handling**:
   - Error toast displays API error message
   - Rate limiter correctly blocks 6th request from same IP
   - Partial success (one email fails, one succeeds) returns HTTP 500
   - Confirmation email failure doesn't block notification email

6. **Rate Limiting**:
   - 5 requests from IP within 5 min allowed
   - 6th request rejected with HTTP 429
   - Older requests (> 5 min) don't count
   - Different IPs have separate limits

### Property-Based Tests (Hypothesis / fast-check)

Run each property test with minimum 100 iterations to cover edge cases:

1. **Property 1 & 2: Validation Schema**
   - Generate random name (0-600 chars), email (various formats), subject, message
   - Verify schema accepts valid combinations
   - Verify schema rejects invalid combinations
   - Edge cases: empty strings, special characters, very long strings

2. **Property 3: Email Subject Formatting**
   - Generate random subject strings (3-500 chars)
   - Verify formatted subject always matches pattern
   - Edge cases: subjects with colons, quotes, special chars

3. **Property 4: HTML Sanitization**
   - Generate random strings with/without special chars
   - Verify < > & " ' are escaped
   - Verify other characters pass through unchanged
   - Edge cases: consecutive special chars, mixed content

4. **Property 5: Email Validation**
   - Generate valid email addresses (user@domain.ext)
   - Generate invalid patterns (missing @, no domain, etc.)
   - Verify validator accepts valid, rejects invalid
   - Edge cases: unicode characters, subdomains, plus addressing

5. **Property 6: SMTP Injection Prevention**
   - Generate email addresses with header injection markers
   - Verify all are rejected
   - Edge cases: URL-encoded variants, mixed with valid chars

6. **Property 7: Confirmation Email Privacy**
   - Generate random form submissions with messages
   - Verify confirmation email never includes message
   - Verify only first name (not full name) included
   - Edge cases: very long messages, special characters

7. **Property 8: Rate Limit Algorithm**
   - Generate request sequences from same IP
   - Verify first 5 within 5-min window allowed
   - Verify 6th rejected
   - Verify requests outside 5-min window reset counter
   - Edge cases: exactly at 5-min boundary, timestamp edge cases

### Integration Tests

Focus on infrastructure and external service interactions:

1. **Email Delivery** (with mocked Resend API):
   - Notification email sent to configured address
   - Confirmation email sent to user address
   - Retry logic executes with correct backoff timing
   - Failure is logged before all retries complete

2. **Logging**:
   - Requests logged with timestamp and IP
   - Errors logged with complete details
   - Success logged with submission ID and status
   - Logs in valid JSON format

3. **Environment Configuration**:
   - Reads NOTIFICATION_EMAIL, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, NEXT_PUBLIC_DEMO_MODE
   - Uses default values when env vars not set
   - Fails gracefully when SMTP credentials missing in production

4. **Rate Limiting**:
   - 5 requests from same IP accepted
   - 6th blocked within 5-min window
   - Different IPs have separate counters
   - Cleanup of expired entries (> 5 min old)

---

## Security Considerations

1. **Input Validation**: All user inputs validated against schema (length, format) before processing.
2. **HTML Escaping**: Special characters escaped before including in emails to prevent email injection.
3. **SMTP Injection Prevention**: Email addresses validated to reject header injection markers (\r\n, %0a, %0d).
4. **Rate Limiting**: IP-based rate limit (5 per 5 min) prevents abuse and DoS.
5. **Secrets Management**: SMTP credentials (username, password) stored in secure server environment variables, never exposed to client or in logs.
6. **HTTPS Enforcement**: Azure Static Web Apps enforces HTTPS by default; all data transmission encrypted.
7. **SMTP Security**: TLS/SSL encryption for SMTP connections to prevent credential interception.
8. **CORS Headers**: Controlled CORS configuration limits cross-origin requests.
9. **Error Messages**: Generic error messages returned to client; detailed errors only in server logs.

---

## Environment Configuration

### Required Environment Variables

| Variable | Purpose | Default | Required |
|---|---|---|---|
| `SMTP_HOST` | SMTP server hostname | None | Yes (production) |
| `SMTP_PORT` | SMTP server port (587 for TLS, 465 for SSL) | `587` | No |
| `SMTP_USER` | SMTP authentication username | None | Yes (production) |
| `SMTP_PASSWORD` | SMTP authentication password | None | Yes (production) |
| `SMTP_FROM_EMAIL` | From address for all emails | `ProVizient <noreply@provizient.com>` | No |
| `SMTP_USE_TLS` | Enable TLS encryption | `true` | No |
| `NOTIFICATION_EMAIL` | Email address for contact inquiries | `info@provizient.com` | No |
| `NEXT_PUBLIC_DEMO_MODE` | Enable demo mode (client-side) | `"false"` | No |

### Configuration Rules

1. `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASSWORD` must be set before production deployment.
2. If SMTP credentials are not set in production, the API should fail with a clear error log.
3. `SMTP_PORT` defaults to 587 (TLS) but can be set to 465 for SSL or other port as required by provider.
4. `SMTP_USE_TLS` and `SMTP_USE_SSL` allow flexibility for different SMTP providers.
5. `NEXT_PUBLIC_DEMO_MODE` is prefixed with `NEXT_PUBLIC_` because it's safe for client-side access (controls only client behavior, not secrets).
6. All SMTP credentials must not be exposed in logs or error messages.

---

## Monitoring & Metrics

### Tracked Metrics

1. **Total form submissions**: Count of all submissions received
2. **Successful submissions**: Both notification and confirmation emails delivered
3. **Notification email failures**: Submission failed to send notification email
4. **Confirmation email failures**: Submission failed to send confirmation email (doesn't block notification)
5. **Validation rejections**: Submissions rejected for invalid input
6. **Rate limit blocks**: Submissions rejected due to IP rate limit
7. **Retry attempts**: Count of retry attempts across all submissions
8. **Average API response time**: Median/p95 response time
9. **Demo submissions**: Count of demo mode submissions (separate from production)

### Alerting Thresholds

1. **Email failure rate > 10%** within 1 hour → Alert support team
2. **Average response time > 5s** → Investigate SMTP server or network issues
3. **Rate limit blocks > 20** within 1 hour → Possible abuse or bot activity
4. **Validation rejection rate > 50%** → Possible UX issue or spam
5. **SMTP connection failures** → Check server availability, credentials, network connectivity

### Log Query Examples

```
// Recent failures
timestamp > now-1h AND level = "error" AND event = "email_failed"

// Success rate last 24h
count(event = "form_submission" AND success = true) / count(event = "form_submission")

// Top error types
group by error_reason | count | sort desc

// Rate limit activity
event = "rate_limit" | group by source_ip | count
```

---

## Implementation Approach

### Phase 1: Validation & Input Sanitization (Sprint 1)

1. Enhance Zod schema in `ContactForm.tsx`:
   - Add max length constraints (500 for fields, 5000 for message)
   - Client-side validation already in place; confirm all constraints
2. Create input sanitization utility (`/api/shared/sanitize.js`):
   - HTML character escaping function
   - Email validation function
   - SMTP injection detection function
3. Update API to sanitize inputs before sending emails
4. Create SMTP email service (`/api/shared/email.js`):
   - Nodemailer integration with connection pooling
   - SMTP credential validation
   - TLS/SSL support

### Phase 2: Error Handling & Retry Logic (Sprint 1)

1. Implement retry logic in email service (`/api/shared/email.js`):
   - 2 retries with exponential backoff (1s, 2s)
   - Log failures immediately
2. Update API endpoint to handle email failures:
   - Treat partial success (one succeeds, one fails) as overall failure (HTTP 500)
   - Log all failures with details
3. Update frontend error handling:
   - Display appropriate toast messages
   - Suggest contacting support on failure

### Phase 3: Rate Limiting & Security (Sprint 2)

1. Implement rate limiter (`/api/shared/rateLimiter.js`):
   - IP-based, 5 requests per 5-minute window
   - Return HTTP 429 when exceeded
   - Clean up old entries
2. Extract source IP from request
3. Add SMTP injection detection

### Phase 4: Logging & Monitoring (Sprint 2)

1. Implement structured logging (`/api/shared/logger.js`):
   - JSON format with timestamp, level, event, user_email, source_ip, etc.
   - Log to Azure Static Web Apps diagnostics
2. Add metrics tracking:
   - Success/failure counts
   - Response times
   - Error types
3. Document log queries for monitoring

### Phase 5: Demo Mode & UX Polish (Sprint 2)

1. Verify demo mode works correctly:
   - NEXT_PUBLIC_DEMO_MODE check in frontend
   - 600ms delay simulation
   - Correct toast message
2. Enhance loading state UX:
   - Ensure minimum 600ms persist
   - Spinner animation
3. Test across browsers and mobile

### Phase 6: Testing & Documentation (Sprint 3)

1. Write unit tests (examples) for validation, error handling, rate limiting
2. Write property-based tests for validation, sanitization, formatting
3. Write integration tests (mocked email service)
4. Document environment configuration
5. Create monitoring dashboard and alert rules

---

## Risk Mitigation

| Risk | Mitigation |
|---|---|
| SMTP server outage or connection failure | Retry logic with backoff; connection pooling for stability; fallback notification to support team; log all failures for manual follow-up |
| SMTP credential exposure | Store credentials in secure server env variables only; never log credentials; use HTTPS for all connections |
| Rate limiter state loss (in-memory) | Use Redis/distributed cache in production; handle graceful degradation if cache unavailable |
| Email injection attacks | Input sanitization with regex validation and HTML escaping; comprehensive testing |
| DoS via form submissions | IP-based rate limiting; CAPTCHA integration (future enhancement) |
| Data privacy violations | Confirmation email excludes message body; sanitize logs; never expose user data in error messages |
| SMTP timeout or slow responses | Configurable timeout settings; monitoring of SMTP response times; failover to alternative SMTP server (future) |
| Form validation bypass | Client-side validation for UX; server-side validation for security (defense in depth) |

---

## Future Enhancements

1. **CAPTCHA Integration**: Add reCAPTCHA v3 to reduce spam submissions
2. **Distributed Rate Limiting**: Use Redis for multi-instance deployments
3. **Attachment Support**: Allow file uploads (with virus scanning)
4. **Scheduled Email Digest**: Daily summary of contact inquiries for team
5. **CRM Integration**: Auto-sync submissions to HubSpot or Salesforce
6. **Advanced Analytics**: Track submission funnel, conversion rates, response times
7. **Template Customization**: Allow email template changes via dashboard
8. **A/B Testing**: Test different form layouts or CTAs
9. **Webhook Integration**: Notify external systems of new submissions

---

## Dependencies & External Services

- **Nodemailer** (or similar SMTP client library): SMTP connection and email sending
- **Azure Static Web Apps**: Serverless function hosting
- **SMTP Server**: Authenticated SMTP service (Gmail, SendGrid, custom mail server, etc.)
- **react-hook-form**: Form state management
- **zod**: Schema validation
- **lucide-react**: Icons (via provizient-icons wrapper)
- **Tailwind CSS v4**: Styling

---

## Success Criteria

1. ✅ All contact form submissions reach `info@provizient.com` reliably
2. ✅ Users receive confirmation emails within seconds of submission
3. ✅ Form validation prevents malformed data from reaching API
4. ✅ Rate limiting prevents abuse (< 20 blocks/hour in normal operation)
5. ✅ Email failures logged and monitored; alert fires when > 10% fail
6. ✅ Zero exposed secrets in logs or error messages
7. ✅ Demo mode works without triggering real emails
8. ✅ All property-based tests pass with 100+ iterations
9. ✅ Zero security vulnerabilities (SMTP injection, email injection, XSS)
10. ✅ API response time < 2s (p95)
