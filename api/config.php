<?php
/**
 * API Configuration
 * 
 * Set these as environment variables in your Hostinger control panel:
 * - SMTP_HOST
 * - SMTP_PORT
 * - SMTP_USER
 * - SMTP_PASSWORD
 * - NOTIFICATION_EMAIL
 * 
 * Or create a .env.php file (DO NOT commit to git):
 */

// Load environment variables from .env.php if it exists
if (file_exists(__DIR__ . '/.env.php')) {
    require_once __DIR__ . '/.env.php';
}

// Default configuration
return [
    'smtp' => [
        'host' => getenv('SMTP_HOST') ?: 'smtp.hostinger.com',
        'port' => getenv('SMTP_PORT') ?: 587,
        'user' => getenv('SMTP_USER') ?: 'info@provizient.com',
        'password' => getenv('SMTP_PASSWORD') ?: '',
        'from_email' => getenv('SMTP_FROM_EMAIL') ?: 'ProVizient <info@provizient.com>',
    ],
    'notification_email' => getenv('NOTIFICATION_EMAIL') ?: 'info@provizient.com',
    'rate_limit' => [
        'max_requests' => 3,
        'window_seconds' => 600, // 10 minutes
    ],
];
?>
