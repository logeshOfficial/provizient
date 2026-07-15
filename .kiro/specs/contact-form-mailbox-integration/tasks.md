# Implementation Plan: Contact Form Mailbox Integration

## Overview

This implementation plan breaks down the Contact Form Mailbox Integration feature into a series of incremental coding tasks organized in 6 phases. Each task builds on previous steps, ensuring core functionality is validated early through automated tests. The phased approach allows for parallel work and structured checkpoints.

**Implementation Language:** TypeScript/JavaScript (React frontend + Node.js backend)

---

## Tasks

### Phase 1: Foundation & Validation

- [ ] 1. Set up project structure and enhanced validation schema
  - Create `src/lib/schemas/contact.ts` with enhanced Zod schema including all field length constraints (name 2-500, email, subject 3-500, message 10-5000, optional fields max 500)
  - Verify schema exports `ContactFormData` type for TypeScript
  - Update `src/components/forms/contact-form.tsx` to import and use the schema via `zodResolver()`
  - Ensure client-side validation displays inline errors below each field with `role="alert"`
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 6.6, 6.7_

  - [-] 1.1 Write property tests for validation schema
    - **Property 1: Field Validation Accepts Valid Data** — Generate form data with valid fields (name ≥2 chars, email valid format, subject ≥3 chars, message 10–5000 chars) and verify schema accepts all combinations
    - **Property 2: Field Validation Rejects Invalid Data** — Generate form data with one or more invalid fields and verify schema rejects with correct field error
    - **Validates: Requirements 1.1, 1.4, 1.5**

- [ ] 2. Implement input sanitization utilities
  - Create `api/shared/sanitize.js` with function to escape HTML special characters (`<>& "'` → `&lt;&gt;&amp;&quot;&#x27;`)
  - Create email validation function to reject SMTP header injection markers (`\r\n`, `%0a`, `%0d`)
  - Export `sanitizeInput()` and `validateEmailFormat()` functions
  - _Requirements: 8.1, 8.2, 8.3, 8.5_

  - [-] 2.1 Write property tests for input sanitization
    - **Property 4: HTML Special Character Sanitization** — Generate strings with special characters and verify each is correctly escaped
    - **Property 5: Email Validation** — Generate valid and invalid email formats and verify validator accepts RFC 5322 compliant patterns and rejects invalid ones
    - **Property 6: SMTP Header Injection Prevention** — Generate emails with injection markers and verify all are rejected
    - **Validates: Requirements 8.1, 8.2, 8.3, 8.5_**

- [ ] 3. Create rate limiting utility
  - Create `api/shared/rateLimiter.js` with IP-based rate limiter (5 requests per IP per 5-minute window)
  - Implement `isRateLimited(ip)` function that returns boolean and maintains internal state
  - Implement cleanup of entries older than 5 minutes
  - _Requirements: 8.6_

  - [ ] 3.1 Write property tests for rate limiter
    - **Property 8: Rate Limit Algorithm** — Generate request sequences from same IP, verify first 5 within 5-min window allowed, 6th rejected, requests outside window reset counter
    - **Validates: Requirements 8.6_**

- [~] 4. Checkpoint — Validation and sanitization complete
  - Run all unit and property tests for validation schema, sanitization, and rate limiter
  - Verify all tests pass (100+ iterations for property tests)
  - Ensure TypeScript compilation without errors
  - Ask the user if questions arise about the validation layer

### Phase 2: Error Handling & Retry Logic

- [ ] 5. Implement enhanced email service with retry logic
  - Update `api/shared/email.js` to export async `sendEmail({ to, subject, html })` function
  - Integrate with Resend API using `RESEND_API_KEY` environment variable
  - Implement retry logic: up to 2 retries with exponential backoff (1s, then 2s between attempts)
  - Log failures immediately (before all retries complete) with error type, message, and recipient
  - Sanitize HTML content before sending (escape special chars)
  - Validate recipient email format before sending
  - Throw descriptive errors on failure (caught by API endpoint)
  - _Requirements: 3.1, 3.3, 3.5, 4.1, 4.2, 4.3, 3.6, 8.1, 8.2_

  - [~] 5.1 Write unit tests for email service
    - Test successful email delivery (mocked Resend)
    - Test retry logic executes with correct backoff timing (1s, 2s)
    - Test failure is logged before all retries complete
    - Test HTML sanitization escapes special characters
    - Test email validation rejects invalid recipients
    - _Requirements: 3.1, 3.6, 4.1, 4.2_

- [ ] 6. Update Contact API endpoint with enhanced error handling
  - Update `api/contact/index.js` to validate HTTP method (POST/OPTIONS only, reject GET/PUT/DELETE with HTTP 405)
  - Validate required fields exist and are non-empty (return HTTP 400 with "Missing required fields")
  - Handle CORS preflight OPTIONS requests (return HTTP 204 with CORS headers)
  - Extract source IP from request headers (X-Forwarded-For or remoteAddr)
  - Call email service twice: once for notification email to `NOTIFICATION_EMAIL` (default `info@provizient.com`), once for user confirmation email
  - Treat partial success (one email succeeds, one fails) as overall failure (HTTP 500)
  - Return HTTP 200 with `{ "success": true }` only if both emails succeed
  - Return HTTP 500 with descriptive error message if any email fails (after all retries)
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 3.1, 3.2, 3.3, 3.4, 3.5, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

  - [~] 6.1 Write unit tests for API response codes
    - Test HTTP 200 on successful submission (both emails delivered)
    - Test HTTP 400 for missing required fields
    - Test HTTP 405 for GET/PUT/DELETE requests
    - Test HTTP 204 for OPTIONS preflight
    - Test HTTP 500 for email delivery failure
    - Test partial success (one email fails) returns HTTP 500
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

- [ ] 7. Implement notification email template
  - Create function to build HTML email body for notification email
  - Include sender name, email, company (if provided), phone (if provided), subject, and message
  - Format subject line as `"New Contact Inquiry: " + subject`
  - Use branded sender identity: `"ProVizient <noreply@provizient.com>"`
  - Escape all user-provided content (use sanitize utility)
  - Preserve line breaks in message body
  - _Requirements: 3.1, 3.2, 3.3, 3.5_

  - [~] 7.1 Write property tests for email template formatting
    - **Property 3: Email Subject Line Format** — Generate random subject text and verify formatted subject always matches `"New Contact Inquiry: " + subject`
    - **Validates: Requirements 3.3_**

- [ ] 8. Implement confirmation email template
  - Create function to build HTML email body for confirmation email
  - Include greeting with user's first name
  - Include acknowledgment of message receipt
  - Include response time expectation: "Our team will get back to you within 24 business hours"
  - Include professional closing: "Best regards, The ProVizient Team"
  - Use same branded sender identity
  - **CRITICAL**: Do NOT include user's submitted message body or personal details beyond first name (no company, phone, or full message)
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.6_

  - [~] 8.1 Write property tests for confirmation email privacy
    - **Property 7: Confirmation Email Privacy** — Generate random form submissions with various messages and verify confirmation email never includes message body, company, or phone
    - **Validates: Requirements 4.6_**

- [~] 9. Checkpoint — Error handling and email templates complete
  - Run all unit and property tests for email service and API endpoints
  - Verify HTTP status codes return correctly
  - Verify both emails are sent with correct content
  - Test with mocked Resend API
  - Verify retry logic executes with correct timing
  - Ask the user if questions arise about error handling

### Phase 3: Rate Limiting & Security

- [ ] 10. Integrate rate limiting into Contact API
  - Update `api/contact/index.js` to check rate limit before processing (call `isRateLimited(ip)` after extracting source IP)
  - If rate-limited, return HTTP 429 with message "Too many requests. Please try again in a few minutes."
  - Log rate limit block with timestamp and IP address
  - _Requirements: 8.6_

  - [~] 10.1 Write unit tests for rate limiting integration
    - Test 5 requests from same IP within 5-min window are allowed
    - Test 6th request from same IP within 5-min window is rejected (HTTP 429)
    - Test different IPs have separate rate limit counters
    - Test requests older than 5 minutes don't count toward limit
    - _Requirements: 8.6_

- [~] 11. Add SMTP injection detection to email validation
  - Update email validation function in `api/shared/sanitize.js` to check for SMTP header injection markers (`\r\n`, `%0a`, `%0d`)
  - Reject any email address containing these markers
  - Test with known injection patterns
  - _Requirements: 8.5_

- [~] 12. Verify HTTPS enforcement and CORS configuration
  - Confirm Azure Static Web Apps enforces HTTPS (no code change needed, built-in)
  - Verify CORS headers in OPTIONS handler allow cross-origin requests from trusted origins
  - Test preflight requests return HTTP 204 with correct headers
  - _Requirements: 8.4, 2.4_

- [~] 13. Checkpoint — Rate limiting and security complete
  - Run all rate limiting and security tests
  - Verify SMTP injection patterns are rejected
  - Verify CORS headers are correct
  - Confirm no secrets are exposed in error messages
  - Ask the user if questions arise about security

### Phase 4: Logging & Monitoring

- [ ] 14. Implement structured logging utility
  - Create `api/shared/logger.js` with function to log events in JSON format
  - Log structure: `{ timestamp, level, event, user_email, source_ip, success, notification_sent, confirmation_sent, error_reason, retry_count, response_time_ms, submission_id }`
  - Implement `logSubmission(data)`, `logError(data)`, `logSuccess(data)` functions
  - Log to console (captured by Azure Static Web Apps diagnostics)
  - _Requirements: 7.1, 7.2, 7.3, 7.6, 11.1, 11.2_

  - [~] 14.1 Write unit tests for logging format
    - Test logs are valid JSON with all required fields
    - Test logs include timestamp in ISO format
    - Test logs don't include sensitive data (full message, phone numbers)
    - Test success/error logs have correct event type
    - _Requirements: 7.1, 7.2, 7.6_

- [ ] 15. Integrate logging into Contact API
  - Update `api/contact/index.js` to log all incoming requests (timestamp, source IP, user email)
  - Log email delivery attempts (notification and confirmation)
  - Log failures with complete error details (type, message, recipient, retry count)
  - Log successes with submission ID and status
  - Ensure logs do NOT include sensitive details beyond email/name (mask company/phone/message for brevity)
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.6_

  - [~] 15.1 Write unit tests for API logging
    - Test incoming request logged with timestamp and IP
    - Test email delivery logged with success/failure status
    - Test failures logged with error type and retry count
    - Test sensitive data is not logged (message body, full phone numbers)
    - _Requirements: 7.1, 7.2, 7.6_

- [~] 16. Add metrics tracking
  - Update logging to track: total submissions, successful submissions, notification email failures, confirmation email failures, validation rejections, rate limit blocks
  - Add timestamp and response time to all logs for performance analysis
  - Ensure metrics can be queried from Azure logs for reporting
  - _Requirements: 11.1, 11.2, 11.3, 11.4_

- [~] 17. Checkpoint — Logging and monitoring complete
  - Run all logging tests
  - Verify logs are valid JSON and queryable
  - Verify no sensitive data is exposed in logs
  - Verify metrics are being tracked correctly
  - Ask the user if questions arise about logging

### Phase 5: Demo Mode & UX Polish

- [ ] 18. Enhance demo mode in Contact Form
  - Update `src/components/forms/contact-form.tsx` to check `process.env.NEXT_PUBLIC_DEMO_MODE`
  - If `NEXT_PUBLIC_DEMO_MODE === "true"`:
    - Simulate form submission with 600ms delay (for UI feedback)
    - Display toast notification: "Demo: message received! This is a POC demo — no email was sent. Production uses Azure + Resend."
    - Do NOT call `/api/contact` endpoint
    - Still perform client-side validation (reject invalid submissions)
    - Clear form fields on "success"
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

  - [~] 18.1 Write unit tests for demo mode
    - Test demo mode check returns correct value from env var
    - Test demo submission shows correct toast message
    - Test no API call is made when demo mode is active
    - Test form validation still works in demo mode
    - Test form fields are cleared after demo submission
    - Test 600ms delay is enforced
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

- [ ] 19. Implement loading state and button feedback
  - Update submit button to show disabled state with text "Sending..." during submission
  - Add spinner icon next to button text
  - Ensure minimum 600ms loading state (even if API responds faster)
  - Return button to enabled state with text "Send Message" on completion
  - _Requirements: 6.3, 6.8_

  - [~] 19.1 Write unit tests for loading state
    - Test submit button is disabled during submission
    - Test spinner icon is displayed
    - Test button text changes to "Sending..."
    - Test minimum 600ms loading state enforced
    - Test button returns to enabled state after completion
    - _Requirements: 6.3, 6.8_

- [ ] 20. Implement success and error toast notifications
  - Update form to display success toast with:
    - Title: "Message sent!"
    - Description: "We'll get back to you within 24 business hours."
    - Variant: success (green/positive styling)
  - Display error toast with:
    - Title: "Error"
    - Description: API error message or "Something went wrong"
    - Variant: destructive (red/error styling)
  - _Requirements: 6.1, 6.2, 6.4_

  - [~] 20.1 Write unit tests for toast notifications
    - Test success toast displays correct title and description
    - Test error toast displays API error message
    - Test error toast displays fallback message when no API message
    - Test form fields are cleared on success
    - _Requirements: 6.1, 6.2, 6.4_

- [~] 21. Add accessibility features to form
  - Ensure all validation error messages have `role="alert"` for screen reader accessibility
  - Verify submit button has accessible text (not just icon)
  - Test form can be submitted via keyboard (Enter key in message field)
  - Ensure error messages are associated with form fields (aria-describedby)
  - _Requirements: 6.6_

- [~] 22. Checkpoint — Demo mode and UX complete
  - Test demo mode works without making API calls
  - Verify toast notifications display correctly
  - Verify loading state persists for minimum 600ms
  - Test form is accessible via keyboard and screen readers
  - Ask the user if questions arise about UX

### Phase 6: Environment Configuration & Integration

- [ ] 23. Configure environment variables
  - Verify `.env.local` (or deployment config) includes:
    - `RESEND_API_KEY` — API key for Resend email service (required for production)
    - `NOTIFICATION_EMAIL` — Default to `info@provizient.com`
    - `RESEND_FROM_EMAIL` — Default to `"ProVizient <noreply@provizient.com>"`
    - `NEXT_PUBLIC_DEMO_MODE` — Set to `"true"` for demo, `"false"` or unset for production
  - Create validation to fail with clear error if `RESEND_API_KEY` not set in production
  - Document all required variables in `.env.example`
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_

  - [~] 23.1 Write unit tests for environment configuration
    - Test API fails with clear error if `RESEND_API_KEY` not set
    - Test default values used when optional vars not set
    - Test `NEXT_PUBLIC_DEMO_MODE` correctly controls client behavior
    - Test secrets are not exposed in error messages
    - _Requirements: 9.1, 9.2, 9.3, 9.5, 9.6_

- [ ] 24. Verify Contact Form integration with enhanced API
  - Confirm `src/components/forms/contact-form.tsx` uses updated validation schema
  - Verify form makes POST request to `/api/contact` with validated data
  - Verify form parses API response and displays correct toast
  - Confirm form does NOT require any changes to props/state management
  - Test that `/api/contact` endpoint URL is configurable via constants if needed
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_

  - [~] 24.1 Write integration tests with mocked API
    - Test form submission sends correct POST request
    - Test API response success triggers success toast
    - Test API response error triggers error toast
    - Test form fields are cleared on success
    - Test form fields are NOT cleared on error
    - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [~] 25. Create monitoring dashboard and alert configuration
  - Document log queries for Azure Static Web Apps diagnostics:
    - Query for success rate: `count(success = true) / count(*)`
    - Query for email failures: `event = "email_failed"`
    - Query for rate limit blocks: `event = "rate_limit"`
    - Query for response times: `p95(response_time_ms)`
  - Document alert thresholds (email failure > 10% in 1 hour, response time > 5s, rate limit blocks > 20)
  - Create runbook for responding to alerts (check logs, contact Resend support, etc.)
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_

- [~] 26. Checkpoint — Environment and integration complete
  - Verify all environment variables are correctly configured
  - Test form submission end-to-end with mocked Resend
  - Verify both notification and confirmation emails are sent
  - Run all tests (unit, property, integration)
  - Verify logs are queryable and metrics are tracked
  - Ask the user if questions arise before finalizing

### Phase 7: Testing & Finalization

- [ ] 27. Comprehensive test coverage
  - Run all unit tests (validation, sanitization, rate limiting, email service, API responses, demo mode, UX)
  - Run all property-based tests with minimum 100 iterations (validation, sanitization, SMTP prevention, email formatting, privacy)
  - Run all integration tests (email delivery, logging, monitoring, form submission)
  - Verify test coverage >= 85% for all modules
  - _Requirements: All_

  - [~] 27.1 Write additional edge case tests
    - Test form submission with very long message (near 5000 char limit)
    - Test form submission with special characters and HTML entities
    - Test form submission from different geographic regions (IP address formats)
    - Test concurrent form submissions (race conditions)
    - Test API behavior when Resend service is temporarily unavailable
    - _Requirements: All_

- [~] 28. Security and vulnerability testing
  - Test email injection attempts are rejected
  - Test SQL injection patterns are rejected
  - Test XSS attempts in form fields are escaped
  - Test CSRF protection (if applicable, confirm Azure Static Web Apps default behavior)
  - Run any automated security scanners available
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_

- [ ] 29. Browser and device compatibility testing
  - Test form on Chrome, Firefox, Safari, Edge (latest versions)
  - Test on mobile devices (iOS Safari, Android Chrome)
  - Test on tablets (iPad, Android tablets)
  - Verify form is usable with keyboard navigation
  - Test form with screen readers (NVDA, JAWS, or VoiceOver)
  - _Requirements: 6.1-6.8_

  - [~] 29.1 Write browser compatibility verification
    - Verify form renders correctly on all supported browsers
    - Verify animations and transitions work smoothly
    - Verify form submission works on all devices
    - Document any browser-specific workarounds
    - _Requirements: 6.1-6.8_

- [~] 30. Performance testing and optimization
  - Measure form submission API response time (target < 2s p95)
  - Verify form client-side validation is responsive (< 100ms)
  - Verify loading state persists for exactly 600ms (not longer)
  - Test under simulated high load (rate limiting should prevent abuse)
  - Document performance metrics in monitoring dashboard
  - _Requirements: 11.1, 11.3, 6.8_

- [~] 31. Documentation and knowledge transfer
  - Document all environment variables and configuration options
  - Create runbook for troubleshooting common issues (email not received, form fails, rate limit exceeded)
  - Document how to query logs and interpret metrics
  - Document alert response procedures
  - Create example requests/responses for API endpoint (for future developers)
  - _Requirements: All_

- [~] 32. Final checkpoint — All tests pass, ready for deployment
  - Run entire test suite (unit, property, integration, security, compatibility)
  - Verify TypeScript compilation without errors or warnings
  - Verify ESLint passes without errors
  - Verify all requirements are met and traced to implementation tasks
  - Verify no secrets are exposed in code or logs
  - Ask the user if questions arise before deployment

---

## Notes

- **Task Organization**: Tasks are organized in 6 phases matching the design approach. Phases 1-4 are sequential (Phase 2 depends on Phase 1, etc.). Phase 5 (UX) can partially overlap with Phase 4. Phase 6 (configuration) can begin once Phases 1-4 are complete. Phase 7 (testing) should run in parallel throughout.

- **Optional Testing Tasks**: Test-related sub-tasks are marked with `*` (e.g., `1.1*`, `2.1*`) to indicate they can be skipped for faster MVP iteration. However, **all core implementation tasks (1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 14, 15, 18, 19, 20, 21, 23, 24, 25, 27, 28, 29, 30, 31, 32) must be completed**. Testing tasks are complementary and should be included for production-ready code.

- **Implementation Language**: All code uses TypeScript for frontend (React) and JavaScript for backend (Node.js/Azure Functions), following the project's tech stack. The design specifies React with `react-hook-form` + `zod`, and Node.js for Azure Static Web Apps functions.

- **Requirements Traceability**: Each task is annotated with specific requirement references (e.g., `_Requirements: 1.1, 1.2_`) to ensure complete coverage. All 11 requirements are addressed across the 32 tasks.

- **Checkpoint Tasks**: Checkpoints are included at reasonable breaks (after Phase 1, 2, 3, 4, 5, 6, and 7) to validate progress and allow for course correction before moving to the next phase.

- **Property-Based Testing**: Design document includes 8 correctness properties. Property tests are created for testable properties (1-8) and are placed close to their corresponding implementation tasks to catch errors early.

- **Demo Mode Testing**: Demo mode is tested in Phase 5 (task 18.1) to ensure it works without API calls and still performs validation.

- **Email Service Mocking**: All tests use mocked Resend API to avoid sending real emails during testing. Integration tests verify email sending logic without external dependencies.

---

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "2.1", "3.1"] },
    { "id": 1, "tasks": ["5.1", "6.1", "7.1"] },
    { "id": 2, "tasks": ["8.1", "10.1", "11.1"] },
    { "id": 3, "tasks": ["14.1", "15.1"] },
    { "id": 4, "tasks": ["18.1", "19.1", "20.1"] },
    { "id": 5, "tasks": ["23.1", "24.1"] },
    { "id": 6, "tasks": ["27.1", "28.1", "29.1", "30.1"] }
  ]
}
```

**Wave Explanation:**
- **Wave 0**: Core validation and security utilities (validation schema, sanitization, rate limiting)
- **Wave 1**: Email service with retry logic and API error handling (can run in parallel with Wave 0 utilities)
- **Wave 2**: Email templates and SMTP injection detection (depends on email service from Wave 1)
- **Wave 3**: Logging implementation (can run after core API from Wave 1)
- **Wave 4**: Demo mode and UX enhancements (depends on API from Wave 1)
- **Wave 5**: Environment configuration and integration (depends on all implementation from Waves 1-4)
- **Wave 6**: Comprehensive testing, security, compatibility, performance verification, and documentation (runs last, verifies all previous work)

---

