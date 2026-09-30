<?php
for ($i = 400000; $i <= 429999; $i++) {
  $senha = strval("$i");
  if (sha1($senha) == 'fffa7ef83d327ee4fa1102050695deb258a9d096') {
    echo 'descobri a senha = ' . $senha;
    exit;
  }
  echo 'Testando senha = ' . $i . '<br>';
}