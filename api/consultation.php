<?php
/**
 * Consultation Form API - Hostinger Native PHP Implementation
 * 
 * POST /api/consultation.php
 * Content-Type: application/json
 * Body: { name, email, company, industry, service, phone?, budget?, message?, preferredDate? }
 */

// Configuration
define('SMTP_HOST', getenv('SMTP_HOST') ?: 'smtp.hostinger.com');
define('SMTP_PORT', getenv('SMTP_PORT') ?: 587);
define('SMTP_USER', getenv('SMTP_USER') ?: 'info@provizient.com');
define('SMTP_PASSWORD', getenv('SMTP_PASSWORD') ?: '');
define('NOTIFICATION_EMAIL', getenv('NOTIFICATION_EMAIL') ?: 'info@provizient.com');

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
$industry = $data['industry'] ?? '';
$service = $data['service'] ?? '';
$budget = $data['budget'] ?? '';
$message = $data['message'] ?? '';
$preferredDate = $data['preferredDate'] ?? '';

// Required field validation
if (empty($name) || empty($email) || empty($company) || empty($industry) || empty($service)) {
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

// Sanitize inputs
$name = sanitizeInput($name);
$email = sanitizeInput($email);
$company = sanitizeInput($company);
$phone = sanitizeInput($phone);
$industry = sanitizeInput($industry);
$service = sanitizeInput($service);
$budget = sanitizeInput($budget);
$message = sanitizeInput($message);
$preferredDate = sanitizeInput($preferredDate);

try {
    // Send notification email
    $notificationHtml = buildNotificationHtml(
        $name, $email, $company, $phone, $industry, $service, $budget, $message, $preferredDate
    );
    $notificationSent = sendEmail(
        NOTIFICATION_EMAIL,
        "New Consultation Request: $company",
        $notificationHtml
    );

    if (!$notificationSent) {
        throw new Exception('Failed to send notification email');
    }

    // Send confirmation email
    $confirmationHtml = buildConfirmationHtml($name);
    $confirmationSent = sendEmail(
        $email,
        'Your Consultation Request — ProVizient',
        $confirmationHtml
    );

    if (!$confirmationSent) {
        throw new Exception('Failed to send confirmation email');
    }

    http_response_code(200);
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    error_log("Consultation error: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'message' => 'Failed to process your consultation request. Please try again or contact us directly.'
    ]);
}

// ============================================================================
// Helper Functions
// ============================================================================

function sanitizeInput($input) {
    return htmlspecialchars(strip_tags($input), ENT_QUOTES, 'UTF-8');
}

function sendEmail($to, $subject, $htmlBody) {
    require_once 'PHPMailer/PHPMailer.php';
    require_once 'PHPMailer/SMTP.php';
    require_once 'PHPMailer/Exception.php';
    
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->Host = SMTP_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = SMTP_USER;
        $mail->Password = SMTP_PASSWORD;
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = SMTP_PORT;
        $mail->CharSet = 'UTF-8';
        
        $mail->setFrom(SMTP_USER, 'ProVizient');
        $mail->addAddress($to);
        $mail->addReplyTo(SMTP_USER, 'ProVizient');
        
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

function buildNotificationHtml($name, $email, $company, $phone, $industry, $service, $budget, $message, $preferredDate) {
    $phoneRow = $phone ? "<tr><td style='padding:8px 0;font-weight:bold;'>Phone</td><td style='padding:8px 0;'>$phone</td></tr>" : '';
    $budgetRow = $budget ? "<tr><td style='padding:8px 0;font-weight:bold;'>Budget</td><td style='padding:8px 0;'>$budget</td></tr>" : '';
    $dateRow = $preferredDate ? "<tr><td style='padding:8px 0;font-weight:bold;'>Preferred Date</td><td style='padding:8px 0;'>$preferredDate</td></tr>" : '';
    $messageSection = $message ? "<h3 style='margin-top:20px;'>Notes</h3><div style='background:#f8fafc;border-left:4px solid #0066ff;padding:16px;border-radius:4px;white-space:pre-wrap;'>$message</div>" : '';
    
    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New Consultation Request</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0f172a;">
  <h2 style="color:#0066ff;">New Consultation Request</h2>
  <table style="width:100%;border-collapse:collapse;">
    <tr><td style="padding:8px 0;font-weight:bold;width:140px;">Name</td><td>$name</td></tr>
    <tr><td style="padding:8px 0;font-weight:bold;">Email</td><td><a href="mailto:$email">$email</a></td></tr>
    <tr><td style="padding:8px 0;font-weight:bold;">Company</td><td>$company</td></tr>
    $phoneRow
    <tr><td style="padding:8px 0;font-weight:bold;">Industry</td><td>$industry</td></tr>
    <tr><td style="padding:8px 0;font-weight:bold;">Service</td><td>$service</td></tr>
    $budgetRow
    $dateRow
  </table>
  $messageSection
  <hr style="margin-top:32px;border:none;border-top:1px solid #e2e8f0;"/>
  <p style="font-size:12px;color:#64748b;">Submitted via provizient.com consultation form</p>
</body>
</html>
HTML;
}

function buildConfirmationHtml($name) {
    $firstName = explode(' ', $name)[0];
    
    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Consultation Request Received</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0f172a;">
  <h2 style="color:#0066ff;">Consultation Request Received</h2>
  <p>Hi $firstName,</p>
  <p style="line-height:1.6;">Thank you for your interest in ProVizient. Our consulting team will review your request and reach out within <strong>1–2 business days</strong>.</p>
  <p style="margin-top:32px;line-height:1.6;">Best regards,<br/><strong>The ProVizient Team</strong></p>
  <hr style="margin-top:32px;border:none;border-top:1px solid #e2e8f0;"/>
  <p style="font-size:12px;color:#64748b;">ProVizient · AI Consulting &amp; Data Solutions · <a href="https://provizient.com" style="color:#0066ff;">provizient.com</a></p>
</body>
</html>
HTML;
}
?>
