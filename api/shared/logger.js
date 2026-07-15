/**
 * Structured JSON logger for Azure Static Web Apps diagnostics.
 * All output goes to console — captured by the platform.
 *
 * Log schema:
 * {
 *   timestamp, level, event,
 *   user_email, source_ip,
 *   success, notification_sent, confirmation_sent,
 *   error_reason, retry_count, response_time_ms, submission_id
 * }
 */

function _log(level, event, data = {}) {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    event,
    user_email: data.user_email || null,
    source_ip: data.source_ip || null,
    success: data.success ?? null,
    notification_sent: data.notification_sent ?? null,
    confirmation_sent: data.confirmation_sent ?? null,
    error_reason: data.error_reason || null,
    retry_count: data.retry_count ?? null,
    response_time_ms: data.response_time_ms ?? null,
    submission_id: data.submission_id || null,
  };
  console.log(JSON.stringify(entry));
}

function logSubmission(data) {
  _log("info", "form_submission", data);
}

function logSuccess(data) {
  _log("info", "form_submission_success", { ...data, success: true });
}

function logError(data) {
  _log("error", "form_submission_error", { ...data, success: false });
}

function logRateLimit(data) {
  _log("warn", "rate_limit", data);
}

module.exports = { logSubmission, logSuccess, logError, logRateLimit };
