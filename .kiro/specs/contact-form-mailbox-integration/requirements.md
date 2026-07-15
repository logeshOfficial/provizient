# Requirements Document: Contact Form Mailbox Integration

## Introduction

ProVizient's marketing website currently has a contact form (`contact-form.tsx`) that captures user inquiries but does not reliably deliver emails to the ProVizient mailbox. This feature enhances the existing contact form to ensure all customer inquiries are:
1. Captured with complete accuracy
2. Delivered reliably to the ProVizient notification mailbox (`info@provizient.com`)
3. Validated for data quality before processing
4. Logged for audit and troubleshooting purposes
5. Accompanied by automatic confirmation emails to users

The feature leverages the existing Azure Static Web Apps API infrastructure (`/api/contact/`) and email service layer, while ensuring production-ready reliability, security, and user experience.

---

## Glossary

- **Contact_Form**: The React component that collects user contact information (name, email, company, phone, subject, message)
- **Contact_API**: The Azure Static Web Apps serverless function (`/api/contact/`) that receives form data and orchestrates email delivery
- **Email_Service**: The shared utility module (`/api/shared/email.js`) that abstracts email sending via authenticated SMTP (e.g., Nodemailer with SMTP credentials)
- **Notification_Mailbox**: The ProVizient corporate email address (`info@provizient.com`) that receives all contact inquiries
- **User_Email**: The contact email address provided by the form submitter
- **Demo_Mode**: A development/preview mode (controlled by `NEXT_PUBLIC_DEMO_MODE` environment variable) that simulates form submission without sending actual emails
- **Production_Mode**: The live environment where form submissions trigger real email delivery
- **Validation_Schema**: The Zod schema (`contactSchema`) that enforces required fields and data format constraints
- **Submission_Request**: The JSON payload sent from the Contact_Form to the Contact_API containing user-provided form data

---

## Requirements

### Requirement 1: Form Data Validation

**User Story:** As a developer, I want the contact form to validate all submitted data against a schema, so that malformed or incomplete submissions are rejected before reaching the API.

#### Acceptance Criteria

1. WHEN the Contact_Form receives a form submission, THE Validation_Schema SHALL validate that the following fields are present and correctly formatted:
   - `name`: non-empty string, minimum 2 characters
   - `email`: valid email address format
   - `subject`: non-empty string, minimum 3 characters
   - `message`: non-empty string, minimum 10 characters
   - `company`: optional string
   - `phone`: optional string

2. WHEN a required field is missing or invalid, THE Contact_Form SHALL display an inline error message to the user without making an API request

3. WHEN a field contains invalid data (e.g., malformed email), THE Contact_Form SHALL prevent form submission and highlight the invalid field

4. THE Validation_Schema SHALL reject submissions where `message` length exceeds 5000 characters to prevent abuse

5. THE Validation_Schema SHALL reject submissions where any single field exceeds 500 characters (except `message`) to prevent spam payloads

---

### Requirement 2: API Endpoint Health & Request Handling

**User Story:** As a form user, I want the API to handle my submission reliably and return clear success or error responses, so that I know whether my message was received.

#### Acceptance Criteria

1. WHEN the Contact_API receives a POST request with valid form data, THE Contact_API SHALL accept the request and begin email processing

2. WHEN the Contact_API receives a POST request with missing required fields (`name`, `email`, `subject`, `message`), THE Contact_API SHALL return an HTTP 400 response with the message "Missing required fields"

3. WHEN the Contact_API receives a GET request or any method other than POST/OPTIONS, THE Contact_API SHALL return an HTTP 405 (Method Not Allowed) response

4. THE Contact_API SHALL handle CORS preflight OPTIONS requests by returning HTTP 204 with appropriate CORS headers

5. WHEN email delivery succeeds for both notification and user confirmation emails, THE Contact_API SHALL return HTTP 200 with `{ "success": true }`

6. WHEN email delivery fails for any email (notification OR user confirmation) after all retry attempts, THE Contact_API SHALL return HTTP 500 with a descriptive error message and log the error for troubleshooting; partial success (one email delivered, one failed) SHALL be treated as overall failure

---

### Requirement 3: Email Delivery to Notification Mailbox

**User Story:** As a ProVizient business user, I want to receive all customer contact inquiries reliably at `info@provizient.com`, so that no leads are lost.

#### Acceptance Criteria

1. WHEN the Contact_API receives a valid form submission, THE Email_Service SHALL deliver a notification email to the address specified in the `NOTIFICATION_EMAIL` environment variable (default: `info@provizient.com`)

2. THE notification email SHALL include the following information in a readable HTML format:
   - **Sender Name** (from form field `name`)
   - **Sender Email** (from form field `email`)
   - **Company** (from form field `company`, if provided)
   - **Phone** (from form field `phone`, if provided)
   - **Subject** (from form field `subject`)
   - **Message Body** (from form field `message`, preserving line breaks)

3. THE notification email subject line SHALL be formatted as: `New Contact Inquiry: [subject]` where `[subject]` is the user-provided subject text

4. WHEN the `NOTIFICATION_EMAIL` environment variable is not set, THE Contact_API SHALL use the default value `info@provizient.com`

5. THE notification email SHALL be sent from a branded sender identity (e.g., `ProVizient Contact Form <noreply@provizient.com>`) configured in the Email_Service

6. WHEN email delivery to the Notification_Mailbox fails on the first attempt, THE Contact_API SHALL:
   - Log the failure immediately with the reason (not waiting for retries to complete)
   - Attempt retry logic (up to 2 retries with exponential backoff of 1s, then 2s between attempts)
   - Retry logic SHALL only occur after confirmed delivery failures (i.e., don't retry if the initial delivery succeeds)

---

### Requirement 4: User Confirmation Email

**User Story:** As a form submitter, I want to receive an automatic confirmation email, so that I have proof my message was received and know when to expect a response.

#### Acceptance Criteria

1. WHEN the Contact_API successfully processes a form submission, THE Email_Service SHALL send a confirmation email to the User_Email address provided in the form

2. THE confirmation email subject SHALL be: `Thank you for contacting ProVizient`

3. THE confirmation email body SHALL include:
   - Greeting with the user's name (from form field `name`)
   - Acknowledgment that their message was received
   - A clear expectation for response time: "Our team will get back to you within 24 business hours"
   - Professional closing: "Best regards, The ProVizient Team"

4. THE confirmation email SHALL be sent from the same branded sender identity as the notification email

5. IF the User_Email is invalid or delivery fails, THE Contact_API SHALL not block the notification email delivery to the Notification_Mailbox; instead, it SHALL log the failure separately

6. THE confirmation email SHALL NOT contain the user's submitted message or personal details beyond their first name for privacy reasons

---

### Requirement 5: Demo Mode for Development & Preview

**User Story:** As a developer or marketer testing the site in preview/staging environments, I want form submissions to be captured but not trigger real email delivery, so that I can test UX without accidentally spamming the mailbox.

#### Acceptance Criteria

1. WHEN the environment variable `NEXT_PUBLIC_DEMO_MODE` is set to `"true"`, THE Contact_Form SHALL simulate a successful submission after a 600ms delay (for UI feedback simulation)

2. WHEN Demo_Mode is active and a form is submitted, THE Contact_Form SHALL display a toast notification: "Demo: message received! This is a POC demo — no email was sent. Production uses SMTP email delivery."

3. WHEN Demo_Mode is active, THE Contact_API SHALL not be called; the form submission SHALL be handled entirely on the client side

4. WHEN the `NEXT_PUBLIC_DEMO_MODE` is not set or is set to `"false"` or any value other than `"true"`, THE Contact_Form SHALL make real API requests and trigger email delivery

5. WHEN Demo_Mode is active, THE Contact_Form SHALL still perform client-side validation; invalid submissions SHALL still be rejected

6. THE Demo_Mode setting SHALL be configurable via environment variable only (not hardcoded) to allow easy switching between environments

---

### Requirement 6: User Experience & Feedback

**User Story:** As a form user, I want clear, immediate feedback when I submit the form, so that I understand whether my submission succeeded and what happens next.

#### Acceptance Criteria

1. WHEN the Contact_Form is submitted with valid data and the Contact_API returns HTTP 200, THE Contact_Form SHALL display a success toast notification with:
   - Title: "Message sent!"
   - Description: "We'll get back to you within 24 business hours."
   - Variant: success (green/positive styling)

2. WHEN the Contact_Form is submitted and the Contact_API returns an error response (HTTP 4xx or 5xx), THE Contact_Form SHALL display an error toast notification with:
   - Title: "Error"
   - Description: The error message from the API response, or "Something went wrong" if no message is provided
   - Variant: destructive (red/error styling)

3. WHEN the Contact_Form is processing a submission, THE submit button SHALL:
   - Be disabled to prevent double-submission
   - Display a spinner icon next to the text "Sending..."
   - Return to enabled state with "Send Message" text once processing completes (success or error)

4. WHEN a form submission completes successfully, THE Contact_Form form fields SHALL be cleared (reset) to prepare for a new submission

5. IF the Contact_API call fails or times out, the Contact_Form MAY still display a success message if it was already sent to the API; the user SHALL be instructed to contact support directly if uncertain

6. WHEN validation fails on a required field, THE Contact_Form SHALL display the error message inline below the field in red text with `role="alert"` for screen reader accessibility

7. THE Contact_Form SHALL require all validations to pass (including field length limits) before permitting any submission attempt, not just before making the API request

8. THE Contact_Form loading state SHALL persist for at least 600ms even if the API responds faster, to ensure users perceive the action as intentional

---

### Requirement 7: Error Handling & Logging

**User Story:** As a support team member, I want errors to be logged for troubleshooting, so that I can diagnose why submissions failed and reach out to affected users.

#### Acceptance Criteria

1. WHEN the Contact_API receives a request, THE Contact_API SHALL log the incoming request with a timestamp and source IP address (for audit trail)

2. WHEN email delivery fails for any reason, THE Contact_API SHALL log the complete error with:
   - Timestamp
   - Error type (e.g., service error, timeout, invalid recipient)
   - Error message and stack trace
   - User-provided contact data (sanitized: show email and name, mask company/phone/message for brevity)
   - Recipient email address (notification or user confirmation)
   - Retry attempt count

3. WHEN the Contact_API encounters an unexpected error (not a known failure mode), THE Contact_API SHALL log the error to the application logs accessible via Azure Static Web Apps diagnostics

4. WHEN email delivery fails after all retry attempts, THE Contact_API SHALL NOT silently ignore the failure; instead, it SHALL:
   - Return an HTTP 500 error to the client
   - Log the failure for manual follow-up
   - Include a contact message in the API response suggesting the user try again or contact support directly

5. THE Contact_API logs SHALL NOT include sensitive information (e.g., full message text, phone numbers) beyond what is necessary for debugging

6. WHEN a submission is processed successfully, THE Contact_API SHALL log: submission ID (if available), user email, timestamp, and "success" status for reporting

---

### Requirement 8: Security & Input Sanitization

**User Story:** As a security-conscious developer, I want user input to be sanitized before being included in emails, so that malicious scripts or email injection attacks are prevented.

#### Acceptance Criteria

1. WHEN the Contact_API receives user-provided text fields (`name`, `email`, `subject`, `message`), THE Email_Service SHALL sanitize HTML special characters to prevent email injection attacks

2. THE Email_Service SHALL escape the following characters in user-provided content:
   - `<` → `&lt;`
   - `>` → `&gt;`
   - `&` → `&amp;`
   - `"` → `&quot;`
   - `'` → `&#x27;`

3. WHEN the Contact_API receives an email address, THE Contact_API SHALL validate it matches a standard email regex pattern before including it in the form data

4. WHEN the Contact_Form sends data to the Contact_API, THE data transmission SHALL use HTTPS (enforced by Azure Static Web Apps) to prevent man-in-the-middle attacks

5. THE Contact_API SHALL reject any submission where the `email` field contains known SQL injection patterns or SMTP header injection markers (e.g., `\r\n`, `%0a`, `%0d`)

6. THE Contact_API SHALL enforce a rate limit: no more than 5 form submissions from the same IP address within a 5-minute window to prevent abuse

---

### Requirement 9: Environment Configuration

**User Story:** As a DevOps engineer, I want email delivery configuration to be externalized via environment variables, so that I can customize behavior per environment without code changes.

#### Acceptance Criteria

1. THE Contact_API SHALL read the following environment variables at startup (or on each request):
   - `NOTIFICATION_EMAIL`: Email address to receive contact inquiries (default: `info@provizient.com`)
   - `SMTP_HOST`: SMTP server hostname (e.g., `smtp.gmail.com`, `smtp.sendgrid.net`)
   - `SMTP_PORT`: SMTP server port (`587` for TLS, `465` for SSL; default: `587`)
   - `SMTP_USER`: SMTP authentication username (required for production; must not be exposed to client)
   - `SMTP_PASSWORD`: SMTP authentication password (required for production; must not be exposed to client)
   - `NEXT_PUBLIC_DEMO_MODE`: Flag to enable demo mode (values: `"true"` or any other value = production)

2. WHEN `SMTP_HOST`, `SMTP_USER`, or `SMTP_PASSWORD` are not set in production, THE Contact_API SHALL fail with a clear error message (logged) rather than silently skipping email delivery

3. THE environment variable `NEXT_PUBLIC_DEMO_MODE` is prefixed with `NEXT_PUBLIC_` because it is safe for client-side access (it controls client-only behavior, not secrets)

4. WHEN the Contact_Form loads, THE Contact_Form SHALL check `process.env.NEXT_PUBLIC_DEMO_MODE` and adapt behavior accordingly (demo vs. production)

5. THE Contact_API SHALL NOT expose `SMTP_PASSWORD`, `SMTP_USER`, or other secrets in error messages returned to the client

6. WHEN deploying to production, ALL required environment variables (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`, `NOTIFICATION_EMAIL`) MUST be set and validated before the deployment is marked as complete; the deployment process SHALL validate configuration integrity before allowing production traffic; this validation requirement applies only to production deployments, not staging or preview environments

---

### Requirement 10: Integration with Existing Contact Form Component

**User Story:** As a frontend developer, I want the contact form component to work seamlessly with the enhanced API, so that no UI changes are required if email delivery is improved behind the scenes.

#### Acceptance Criteria

1. THE Contact_Form component (React) SHALL accept form data via `useForm` hook with `react-hook-form` and `zod` validation (existing pattern)

2. WHEN the Contact_Form is submitted, THE Contact_Form SHALL make a POST request to `/api/contact` with the JSON body containing the validated form data

3. THE Contact_Form SHALL parse the response from the Contact_API and display appropriate success or error toast notifications (existing pattern)

4. WHEN the Contact_Form makes an API request to submit the form and the API call fails or times out, THE Contact_Form MAY still allow the form to be considered as submitted by the user (displaying a success message) with a note to contact support if they do not receive a confirmation email

5. THE Contact_Form SHALL NOT require any changes to its props, state management, or component structure to work with the enhanced API

6. IF the Contact_API endpoint URL changes, the change SHALL be configurable via a single constant (e.g., in `src/lib/constants.ts` or via environment variable) without requiring component code changes

7. THE Contact_Form behavior when `NEXT_PUBLIC_DEMO_MODE` is enabled SHALL remain consistent with the current implementation (client-side simulation)

---

### Requirement 11: Success Metrics & Monitoring

**User Story:** As a business stakeholder, I want visibility into form submission success rates and delivery performance, so that I can monitor the health of the contact system.

#### Acceptance Criteria

1. THE Contact_API SHALL track the following metrics (logged for analysis):
   - Total form submissions received
   - Successful submissions (both emails delivered)
   - Submissions where notification email failed
   - Submissions where user confirmation email failed
   - Submissions rejected for validation errors
   - Submissions rate-limited due to abuse protection
   - Average API response time

2. WHEN a form submission is processed, THE Contact_API SHALL log a structured entry (JSON format) containing: timestamp, user_email, success_status, notification_sent, confirmation_sent, error_reason (if applicable)

3. THE Contact_API logs SHALL be queryable via Azure Static Web Apps logs for generating reports

4. WHEN email delivery fails, THE Contact_API SHALL include information about failure mode (service error, timeout, invalid recipient, etc.) for root cause analysis

5. THE system SHALL track and alert on anomalies (e.g., more than 10% of submissions failing within an hour) so the support team can respond quickly

6. WHEN Demo_Mode is active, demo submissions SHALL NOT be counted in production metrics; a separate counter SHALL track demo submissions for testing validation

