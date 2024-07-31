<?php
// Ensure that error reporting is enabled
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Get the URL to fetch
$url = isset($_GET['url']) ? $_GET['url'] : '';

// Validate URL
if (filter_var($url, FILTER_VALIDATE_URL) === FALSE) {
    die('Invalid URL');
}

// Initialize cURL session
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, false);

// Execute cURL request
$response = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    die('cURL error: ' . curl_error($ch));
}

// Close cURL session
curl_close($ch);

// Output response
echo $response;
?>
