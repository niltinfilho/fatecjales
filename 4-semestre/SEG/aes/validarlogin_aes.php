<?php
include 'AES.php';

$inputKey = "5131af7a19f7057b";
$blockSize = 128;

$usuario = $_POST['usuario'];
$aesUser = new AES($usuario, $inputKey, $blockSize);
$usuario_cripto = base64_encode($aesUser->encrypt());

$senha = $_POST['senha'];
$aesPass = new AES($senha, $inputKey, $blockSize);
$senha_cripto = base64_encode($aesPass->encrypt());

$url = 'http://192.168.100.252/cripto/aes/validarlogin.php';

$ch = curl_init($url);

$params = "usuario=$usuario_cripto&senha=$senha_cripto";

curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);

print_r($result);

curl_close($ch);