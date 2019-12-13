<?php

use Core\WebCloneServer;

include __DIR__ . '/../../boot.php';

try {
    (new WebCloneServer(__DIR__))->handle($_SERVER['REQUEST_URI']);
} catch(Exception $e) {
    header('HTTP/1.1 400 Bad Request');
    $stderr = fopen('php://stderr', 'w');
    fwrite($stderr, $e->getMessage() . PHP_EOL);
    fwrite($stderr, $e->getTraceAsString() . PHP_EOL);
    __output($e->getMessage());
}