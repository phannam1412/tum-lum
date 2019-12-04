
<?php
$start = microtime(true);
$result = 0;
for($a=0;$a < 100000000;$a++) {
    $result = $result + 12345;
    $result = $result * 3;
    if($result > 1000000)
        $result = $result % 1000000;
    $result = $result / 2;
}
$end = microtime(true);
print "execution time: " . round($end - $start, 1) . "s" . PHP_EOL;
