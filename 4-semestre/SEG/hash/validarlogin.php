<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$login = $_POST['login'];
// $senha = $_POST['senha'];
$senha = sha1($_POST['senha']);

$db = pg_pconnect('host=localhost port=5432
	dbname=fatec user=postgres
	password=password') or die("Não foi possível conectar-se ao banco de dados...");

$sql = "SELECT * FROM usuarios WHERE
login='$login' and senha='$senha'";

$resultado = pg_query($db, $sql);

// Verifica se encontrou algum registro
if (pg_num_rows($resultado) == 1) {
  // O registro foi encontrado => o usuário é valido
  $row = pg_fetch_array($resultado);
  echo 'Seja bem vindo.: ' . $row['nome'];
} else {
  // Nenhum registro foi encontrado => o usuário é inválido
  echo 'Login ou senha incorretos....';
}