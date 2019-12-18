<?php

$input = file_get_contents('input.txt');
$input = explode(PHP_EOL, trim($input));
foreach($input as $file) {
    system("wget $file");
}
