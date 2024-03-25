<?php

// Sample backend logic based on user message
$input = json_decode(file_get_contents('php://input'), true);

$message = strtolower($input['message']);

if (strpos($message, 'consultancy') !== false) {
    $response = "Our consultancy services include strategic planning, market analysis, and more. How can we assist you further?";
} elseif (strpos($message, 'digital transformation') !== false) {
    $response = "Digital transformation involves integrating digital technology across all aspects of a business. What specific aspect do you need support with?";
} elseif (strpos($message, 'document management system') !== false) {
    $response = "Our document management system simplifies document storage, retrieval, and collaboration. How can we help you with it?";
} else {
    $response = "I'm sorry, I didn't understand that. Could you please provide more details?";
}

echo json_encode(['response' => $response]);
?>
