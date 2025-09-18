<?php
session_start();

// Initialize counter if not set
if (!isset($_SESSION['counter'])) {
    $_SESSION['counter'] = 0;
}

if (isset($_GET['action'])) {
    $action = $_GET['action'];

    if ($action === "increment") {
        $_SESSION['counter'] += 1;
    } elseif ($action === "decrement" && $_SESSION['counter'] > 0) {
        $_SESSION['counter'] -= 1;
    } elseif ($action === "reset") {
        $_SESSION['counter'] = 0;
    }
}

// Send response in JSON
echo json_encode(["value" => $_SESSION['counter']]);
?>
