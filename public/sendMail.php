<?php

/**
 * Clean up header injections
 */
function clean_string($string) {
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
}

/**
 * Handle CORS
 */
switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"):
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"):
        header("Access-Control-Allow-Origin: *");

        // Set your email here!
        $recipient = "info@jensbaumann.com"; 
        $subject = "Neue Kontaktanfrage von deinem Portfolio";

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $name = clean_string($params->name);
        $email = clean_string($params->email);
        $message = clean_string($params->request);

        $headers = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: noreply@jensbaumann.com";
        $headers[] = "Reply-To: " . $email;

        $content = "
            <html>
            <head>
                <title>$subject</title>
            </head>
            <body>
                <h2>Neue Nachricht von deinem Portfolio</h2>
                <p><strong>Name:</strong> $name</p>
                <p><strong>E-Mail:</strong> $email</p>
                <p><strong>Nachricht:</strong><br>$message</p>
            </body>
            </html>
        ";

        if (mail($recipient, $subject, $content, implode("\r\n", $headers))) {
            http_response_code(200);
        } else {
            http_response_code(500);
        }
        break;
    default:
        header("Allow: POST", true, 405);
        exit;
}
