<%@ page contentType="text/html" pageEncoding="UTF-8" %>
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
    private String selecionado(String atual, String valor) {
        return valor.equals(atual) ? "selected" : "";
    }
%>
<%
    Aluno aluno = (Aluno) request.getAttribute("aluno");
    if (aluno == null) aluno = new Aluno();
    boolean editando = aluno.getId() > 0;
    String erro = (String) request.getAttribute("erro");
%>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= editando ? "Editar aluno" : "Cadastrar aluno" %></title>
    <link rel="stylesheet" href="<%= request.getContextPath() %>/css/estilo.css">
</head>
<body>
<main class="container">
    <span class="marca">PRIMEIRAAPLICACAOWEB</span>
    <h1><%= editando ? "Editar aluno" : "Cadastrar aluno" %></h1>

    <% if (erro != null && !erro.isBlank()) { %>
        <div class="mensagem erro"><%= h(erro) %></div>
    <% } %>

    <form method="post" action="<%= request.getContextPath() %>/alunos">
        <input type="hidden" name="acao" value="salvar">
        <input type="hidden" name="id" value="<%= aluno.getId() == 0 ? "" : aluno.getId() %>">

        <label for="nome">Nome *</label>
        <input id="nome" name="nome" type="text" required value="<%= h(aluno.getNome()) %>">

        <label for="email">E-mail *</label>
        <input id="email" name="email" type="email" required value="<%= h(aluno.getEmail()) %>">

        <label for="curso">Curso *</label>
        <select id="curso" name="curso" required>
            <option value="">Selecione</option>
            <option value="Sistemas de Informação" <%= selecionado(aluno.getCurso(), "Sistemas de Informação") %>>Sistemas de Informação</option>
            <option value="Análise e Desenvolvimento de Sistemas" <%= selecionado(aluno.getCurso(), "Análise e Desenvolvimento de Sistemas") %>>Análise e Desenvolvimento de Sistemas</option>
            <option value="Gestão da Tecnologia da Informação" <%= selecionado(aluno.getCurso(), "Gestão da Tecnologia da Informação") %>>Gestão da Tecnologia da Informação</option>
        </select>

        <label for="semestre">Semestre *</label>
        <input id="semestre" name="semestre" type="number" min="1" max="12" required value="<%= aluno.getSemestre() == 0 ? "" : aluno.getSemestre() %>">

        <label for="turno">Turno *</label>
        <select id="turno" name="turno" required>
            <option value="">Selecione</option>
            <option value="Matutino" <%= selecionado(aluno.getTurno(), "Matutino") %>>Matutino</option>
            <option value="Vespertino" <%= selecionado(aluno.getTurno(), "Vespertino") %>>Vespertino</option>
            <option value="Noturno" <%= selecionado(aluno.getTurno(), "Noturno") %>>Noturno</option>
        </select>

        <div class="botoes">
            <button class="botao" type="submit"><%= editando ? "Salvar alterações" : "Cadastrar" %></button>
            <a class="botao secundario" href="<%= request.getContextPath() %>/alunos">Cancelar</a>
        </div>
    </form>
</main>
</body>
</html>
