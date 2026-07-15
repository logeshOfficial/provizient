/**
 * Input sanitization and validation utilities.
 * Used by API endpoints before inserting user content into emails.
 */

/**
 * Escape HTML special characters to prevent email injection / XSS.
 * Handles: < > & " '
 * @param {string} str
 * @returns {string}
 */
function sanitizeInput(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

/**
 * Validate an email address.
 * - Rejects SMTP header injection markers: \r \n %0a %0d
 * - Validates against a standard RFC 5321 compatible pattern
 * @param {string} email
 * @returns {boolean}
 */
function validateEmailFormat(email) {
  if (typeof email !== "string") return false;

  // Reject SMTP header injection markers (raw and URL-encoded)
  if (/[\r\n]/.test(email)) return false;
  if (/%0[aAdD]/i.test(email)) return false;

  // Standard email regex (RFC 5321 simplified)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email);
}

module.exports = { sanitizeInput, validateEmailFormat };
