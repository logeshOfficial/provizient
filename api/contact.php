<?php
/**
 * Contact Form API - Hostinger Native PHP Implementation
 * 
 * POST /api/contact.php
 * Content-Type: application/json
 * Body: { name, email, company?, phone?, subject, message }
 * 
 * Returns:
 *   200 { success: true }
 *   400 { message: "..." }
 *   405 { message: "Method Not Allowed" }
 *   429 { message: "Too many requests..." }
 *   500 { message: "..." }
 */

// Configuration
define('SMTP_HOST', getenv('SMTP_HOST') ?: 'smtp.hostinger.com');
define('SMTP_PORT', getenv('SMTP_PORT') ?: 587);
define('SMTP_USER', getenv('SMTP_USER') ?: 'info@provizient.com');
define('SMTP_PASSWORD', getenv('SMTP_PASSWORD') ?: '');
define('SMTP_FROM_EMAIL', getenv('SMTP_FROM_EMAIL') ?: 'ProVizient <info@provizient.com>');
define('NOTIFICATION_EMAIL', getenv('NOTIFICATION_EMAIL') ?: 'info@provizient.com');

// Rate limiting configuration
define('RATE_LIMIT', 3); // requests per window
define('RATE_WINDOW', 600); // 10 minutes in seconds

// CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Method guard
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method Not Allowed']);
    exit;
}

// Get JSON body
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid JSON']);
    exit;
}

// Extract fields
$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$company = $data['company'] ?? '';
$phone = $data['phone'] ?? '';
$subject = $data['subject'] ?? '';
$message = $data['message'] ?? '';

// Required field validation
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(['message' => 'Missing required fields']);
    exit;
}

// Email validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid email address']);
    exit;
}

// Rate limiting
$ip = getClientIp();
if (isRateLimited($ip)) {
    logEvent('rate_limit', ['ip' => $ip, 'email' => $email]);
    http_response_code(429);
    echo json_encode(['message' => 'Too many requests. Please try again in a few minutes.']);
    exit;
}

// Sanitize inputs
$name = sanitizeInput($name);
$email = sanitizeInput($email);
$company = sanitizeInput($company);
$phone = sanitizeInput($phone);
$subject = sanitizeInput($subject);
$message = sanitizeInput($message);

// Log submission
logEvent('submission', ['ip' => $ip, 'email' => $email]);

try {
    // Send notification email to info@provizient.com
    $notificationHtml = buildNotificationHtml($name, $email, $company, $phone, $subject, $message);
    $notificationSent = sendEmail(
        NOTIFICATION_EMAIL,
        "New Contact Inquiry: $subject",
        $notificationHtml
    );

    if (!$notificationSent) {
        throw new Exception('Failed to send notification email');
    }

    // Send confirmation email to user
    $confirmationHtml = buildConfirmationHtml($name);
    $confirmationSent = sendEmail(
        $email,
        'Thank you for contacting ProVizient',
        $confirmationHtml
    );

    if (!$confirmationSent) {
        throw new Exception('Failed to send confirmation email');
    }

    logEvent('success', ['ip' => $ip, 'email' => $email]);
    
    http_response_code(200);
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    logEvent('error', ['ip' => $ip, 'email' => $email, 'error' => $e->getMessage()]);
    
    http_response_code(500);
    echo json_encode([
        'message' => 'Failed to send your message. Please try again or contact us directly at info@provizient.com.'
    ]);
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get client IP address
 */
function getClientIp() {
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ips = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        return trim($ips[0]);
    }
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

/**
 * Sanitize input to prevent XSS
 */
function sanitizeInput($input) {
    return htmlspecialchars(strip_tags($input), ENT_QUOTES, 'UTF-8');
}

/**
 * Check if IP is rate limited
 */
function isRateLimited($ip) {
    $logFile = sys_get_temp_dir() . '/provizient_rate_limit.json';
    
    if (!file_exists($logFile)) {
        $data = [];
    } else {
        $data = json_decode(file_get_contents($logFile), true) ?: [];
    }
    
    $now = time();
    $key = md5($ip);
    
    // Clean old entries
    if (isset($data[$key])) {
        $data[$key] = array_filter($data[$key], function($timestamp) use ($now) {
            return ($now - $timestamp) < RATE_WINDOW;
        });
    } else {
        $data[$key] = [];
    }
    
    // Check limit
    if (count($data[$key]) >= RATE_LIMIT) {
        return true;
    }
    
    // Add current request
    $data[$key][] = $now;
    file_put_contents($logFile, json_encode($data));
    
    return false;
}

/**
 * Send email using Hostinger SMTP
 */
function sendEmail($to, $subject, $htmlBody) {
    require_once 'PHPMailer/PHPMailer.php';
    require_once 'PHPMailer/SMTP.php';
    require_once 'PHPMailer/Exception.php';
    
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    
    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = SMTP_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = SMTP_USER;
        $mail->Password = SMTP_PASSWORD;
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = SMTP_PORT;
        $mail->CharSet = 'UTF-8';
        
        // Sender and recipient
        $mail->setFrom(SMTP_USER, 'ProVizient');
        $mail->addAddress($to);
        $mail->addReplyTo(SMTP_USER, 'ProVizient');
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $htmlBody;
        $mail->AltBody = strip_tags($htmlBody);
        
        return $mail->send();
    } catch (Exception $e) {
        error_log("Email error: {$mail->ErrorInfo}");
        return false;
    }
}

/**
 * Build notification email HTML
 */
function buildNotificationHtml($name, $email, $company, $phone, $subject, $message) {
    $companyRow = $company ? "<tr><td style='padding:8px 0;font-weight:bold;'>Company</td><td style='padding:8px 0;'>$company</td></tr>" : '';
    $phoneRow = $phone ? "<tr><td style='padding:8px 0;font-weight:bold;'>Phone</td><td style='padding:8px 0;'>$phone</td></tr>" : '';
    
    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New Contact Inquiry</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0f172a;">
  <h2 style="color:#0066ff;margin-bottom:16px;">New Contact Inquiry</h2>
  <table style="width:100%;border-collapse:collapse;">
    <tr><td style="padding:8px 0;font-weight:bold;width:120px;">Name</td><td style="padding:8px 0;">$name</td></tr>
    <tr><td style="padding:8px 0;font-weight:bold;">Email</td><td style="padding:8px 0;"><a href="mailto:$email">$email</a></td></tr>
    $companyRow
    $phoneRow
    <tr><td style="padding:8px 0;font-weight:bold;">Subject</td><td style="padding:8px 0;">$subject</td></tr>
  </table>
  <h3 style="margin-top:20px;margin-bottom:8px;">Message</h3>
  <div style="background:#f8fafc;border-left:4px solid #0066ff;padding:16px;border-radius:4px;white-space:pre-wrap;">$message</div>
  <hr style="margin-top:32px;border:none;border-top:1px solid #e2e8f0;" />
  <p style="font-size:12px;color:#64748b;">Submitted via provizient.com contact form</p>
</body>
</html>
HTML;
}

/**
 * Build confirmation email HTML
 */
function buildConfirmationHtml($name) {
    $firstName = explode(' ', $name)[0];
    
    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Thank you for contacting ProVizient</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0f172a;">
  <h2 style="color:#0066ff;margin-bottom:16px;">Thanks for reaching out, $firstName!</h2>
  <p style="line-height:1.6;">We've received your message and appreciate you taking the time to contact us.</p>
  <p style="line-height:1.6;">Our team will get back to you within <strong>24 business hours</strong>.</p>
  <p style="margin-top:32px;line-height:1.6;">Best regards,<br/><strong>The ProVizient Team</strong></p>
  <hr style="margin-top:32px;border:none;border-top:1px solid #e2e8f0;" />
  <p style="font-size:12px;color:#64748b;">
    ProVizient · AI Consulting &amp; Data Solutions ·
    <a href="https://provizient.com" style="color:#0066ff;">provizient.com</a>
  </p>
</body>
</html>
HTML;
}

/**
 * Log events for monitoring
 */
function logEvent($type, $data) {
    $logFile = sys_get_temp_dir() . '/provizient_contact.log';
    $timestamp = date('Y-m-d H:i:s');
    $message = json_encode([
        'timestamp' => $timestamp,
        'type' => $type,
        'data' => $data
    ]) . "\n";
    file_put_contents($logFile, $message, FILE_APPEND);
}
?>
