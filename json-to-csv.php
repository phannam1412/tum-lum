<?php

global $argv;
if(count($argv) < 2)
    throw new Exception('please specify the directory that you want to combine all your *.json file');
$files = glob($argv[1] . '/*.json');
print_r($files);
if(empty($files))
    throw new Exception('no json file detected');
$headers = [];
$json = json_decode(file_get_contents($files[0]), true);
$headers = array_keys($json);
$output = [];
$f = fopen('output.csv', 'w');
fputcsv($f, $headers);
foreach($files as $file) {
    $json = json_decode(file_get_contents($file), true);
    fputcsv($f, $json);
}
fclose($f);
