<?php
include 'AES.php';
$inputText = $_GET['msg'] ?? "tl+G/3KAO6gzOUBmFfTRW2cGvvd94EDn30SV0DpfJYs=";
$inputKey = $_GET['key'] ?? "5131af7a19f7057b";
$blockSize = 128;
$aes = new AES($inputText, $inputKey, $blockSize);
$dec = $aes->decrypt();
echo "Após decifragem.: " . $dec . "<br/>";