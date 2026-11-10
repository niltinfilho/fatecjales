<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Erro no cadastro</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f4f6f8; color: #222; margin: 0; padding: 40px; }
        main { max-width: 500px; margin: auto; background: white; padding: 30px; border: 1px solid #ccc; border-radius: 8px; }
        .erro { padding: 16px; background: #fff0f0; border-left: 5px solid #b91c1c; }
    </style>
</head>
<body>
<main>
    <h1>Não foi possível realizar o cadastro</h1>
    <div class="erro"><p>${erro}</p></div>
    <a href="index.html">Voltar ao formulário</a>
</main>
</body>
</html>
