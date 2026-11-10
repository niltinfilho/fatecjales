package br.edu.exemplo.controle;

import br.edu.exemplo.modelo.Aluno;
import br.edu.exemplo.repositorio.AlunoRepositorio;
import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/alunos")
public class AlunoServlet extends HttpServlet {

    private final AlunoRepositorio repositorio = new AlunoRepositorio();

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        String acao = request.getParameter("acao");

        if ("novo".equals(acao)) {
            abrirFormulario(request, response, new Aluno());
            return;
        }

        if ("editar".equals(acao)) {
            abrirEdicao(request, response);
            return;
        }

        listar(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        String acao = request.getParameter("acao");

        if ("excluir".equals(acao)) {
            excluir(request, response);
            return;
        }

        salvar(request, response);
    }

    private void listar(HttpServletRequest request,
                        HttpServletResponse response)
            throws ServletException, IOException {
        request.setAttribute("alunos", repositorio.listar());
        request.getRequestDispatcher("/WEB-INF/views/lista.jsp")
                .forward(request, response);
    }

    private void abrirFormulario(HttpServletRequest request,
                                 HttpServletResponse response,
                                 Aluno aluno)
            throws ServletException, IOException {
        request.setAttribute("aluno", aluno);
        request.getRequestDispatcher("/WEB-INF/views/formulario.jsp")
                .forward(request, response);
    }

    private void abrirEdicao(HttpServletRequest request,
                             HttpServletResponse response)
            throws ServletException, IOException {
        try {
            int id = Integer.parseInt(request.getParameter("id"));
            Aluno aluno = repositorio.buscarPorId(id);

            if (aluno == null) {
                request.setAttribute("erro", "Aluno não encontrado.");
                listar(request, response);
                return;
            }

            abrirFormulario(request, response, aluno);
        } catch (NumberFormatException e) {
            request.setAttribute("erro", "Identificador inválido.");
            listar(request, response);
        }
    }

    private void salvar(HttpServletRequest request,
                        HttpServletResponse response)
            throws ServletException, IOException {

        String idTexto = request.getParameter("id");
        String nome = texto(request.getParameter("nome"));
        String email = texto(request.getParameter("email"));
        String curso = texto(request.getParameter("curso"));
        String semestreTexto = request.getParameter("semestre");
        String turno = texto(request.getParameter("turno"));

        int id = 0;
        int semestre;

        try {
            if (idTexto != null && !idTexto.isBlank()) {
                id = Integer.parseInt(idTexto);
            }
            semestre = Integer.parseInt(semestreTexto);
        } catch (NumberFormatException e) {
            encaminharErroFormulario(request, response,
                    new Aluno(id, nome, email, curso, 0, turno),
                    "O semestre deve ser um número inteiro.");
            return;
        }

        Aluno aluno = new Aluno(id, nome, email, curso, semestre, turno);
        String erro = validar(aluno);

        if (erro != null) {
            encaminharErroFormulario(request, response, aluno, erro);
            return;
        }

        repositorio.salvar(aluno);

        // Post/Redirect/Get: evita repetir o POST ao atualizar a página.
        response.sendRedirect(request.getContextPath() + "/alunos");
    }

    private void excluir(HttpServletRequest request,
                         HttpServletResponse response)
            throws IOException {
        try {
            int id = Integer.parseInt(request.getParameter("id"));
            repositorio.excluir(id);
        } catch (NumberFormatException e) {
            // Mantém a aplicação utilizável e retorna à listagem.
        }

        response.sendRedirect(request.getContextPath() + "/alunos");
    }

    private void encaminharErroFormulario(HttpServletRequest request,
                                          HttpServletResponse response,
                                          Aluno aluno,
                                          String mensagem)
            throws ServletException, IOException {
        request.setAttribute("aluno", aluno);
        request.setAttribute("erro", mensagem);
        request.getRequestDispatcher("/WEB-INF/views/formulario.jsp")
                .forward(request, response);
    }

    private String validar(Aluno aluno) {
        if (aluno.getNome().isBlank()) {
            return "O nome deve ser informado.";
        }
        if (aluno.getEmail().isBlank() || !aluno.getEmail().contains("@")) {
            return "Informe um e-mail válido.";
        }
        if (aluno.getCurso().isBlank()) {
            return "Selecione o curso.";
        }
        if (aluno.getSemestre() < 1 || aluno.getSemestre() > 12) {
            return "O semestre deve estar entre 1 e 12.";
        }
        if (aluno.getTurno().isBlank()) {
            return "Selecione o turno.";
        }
        return null;
    }

    private String texto(String valor) {
        return valor == null ? "" : valor.trim();
    }
}
