<?php
include 'AES.php';
$inputText = $_GET['msg'] ?? "testando criptografia aes";
$inputKey = $_GET['key'] ?? "5131af7a19f7057b";
$blockSize = 128;
$aes = new AES($inputText, $inputKey, $blockSize);
$enc = $aes->encrypt();
echo "Após criptografia.: " . $enc . "<br/>";
