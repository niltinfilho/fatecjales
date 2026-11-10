<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<%@ page import="java.util.List" %>
<%@ page import="br.edu.exemplo.modelo.Aluno" %>
<%!
    private String h(String valor) {
        if (valor == null) return "";
        return valor.replace("&", "&amp;")
                    .replace("<", "&lt;")
                    .replace(">", "&gt;")
                    .replace("\"", "&quot;")
                    .replace("'", "&#39;");
    }
%>
<%
    List<Aluno> alunos = (List<Aluno>) request.getAttribute("alunos");
    String erro = (String) request.getAttribute("erro");
%>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alunos cadastrados</title>
    <link rel="stylesheet" href="<%= request.getContextPath() %>/css/estilo.css">
</head>
<body>
<main class="container largo">
    <header class="topo">
        <div>
            <span class="marca">PRIMEIRAAPLICACAOWEB</span>
            <h1>Alunos cadastrados</h1>
        </div>
        <a class="botao" href="<%= request.getContextPath() %>/alunos?acao=novo">Novo aluno</a>
    </header>

    <% if (erro != null && !erro.isBlank()) { %>
        <div class="mensagem erro"><%= h(erro) %></div>
    <% } %>

    <div class="tabela-responsiva">
        <table>
            <thead>
            <tr>
                <th>ID</th><th>Nome</th><th>E-mail</th><th>Curso</th><th>Sem.</th><th>Turno</th><th>Ações</th>
            </tr>
            </thead>
            <tbody>
            <% if (alunos == null || alunos.isEmpty()) { %>
                <tr><td colspan="7">Nenhum aluno cadastrado.</td></tr>
            <% } else { %>
                <% for (Aluno aluno : alunos) { %>
                <tr>
                    <td><%= aluno.getId() %></td>
                    <td><%= h(aluno.getNome()) %></td>
                    <td><%= h(aluno.getEmail()) %></td>
                    <td><%= h(aluno.getCurso()) %></td>
                    <td><%= aluno.getSemestre() %>º</td>
                    <td><%= h(aluno.getTurno()) %></td>
                    <td class="acoes">
                        <a href="<%= request.getContextPath() %>/alunos?acao=editar&id=<%= aluno.getId() %>">Editar</a>
                        <form method="post" action="<%= request.getContextPath() %>/alunos" onsubmit="return confirm('Excluir este aluno?');">
                            <input type="hidden" name="acao" value="excluir">
                            <input type="hidden" name="id" value="<%= aluno.getId() %>">
                            <button class="link-perigo" type="submit">Excluir</button>
                        </form>
                    </td>
                </tr>
                <% } %>
            <% } %>
            </tbody>
        </table>
    </div>

    <p class="rodape-link"><a href="<%= request.getContextPath() %>/index.html">Abrir exemplo da Aula 01</a></p>
</main>
</body>
</html>
