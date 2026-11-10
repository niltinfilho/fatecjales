<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado do cadastro</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f4f6f8; color: #222; margin: 0; padding: 40px; }
        main { max-width: 500px; margin: auto; background: white; padding: 30px; border: 1px solid #ccc; border-radius: 8px; }
        .resultado { padding: 16px; background: #e8f0fe; border-left: 5px solid #1d4ed8; }
        a { display: inline-block; margin-top: 20px; color: #1644aa; }
    </style>
</head>
<body>
<main>
    <h1>Cadastro realizado</h1>
    <div class="resultado">
        <p><strong>Nome:</strong> ${pessoa.nome}</p>
        <p><strong>Idade:</strong> ${pessoa.idade}</p>
        <p><strong>Faixa etária:</strong> ${pessoa.faixaEtaria}</p>
    </div>
    <a href="index.html">Realizar outro cadastro</a>
</main>
</body>
</html>
