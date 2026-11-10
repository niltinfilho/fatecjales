package br.edu.exemplo.controle;

import br.edu.exemplo.modelo.Pessoa;
import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/cadastro")
public class CadastroServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        String nome = request.getParameter("nome");
        String idadeTexto = request.getParameter("idade");

        if (nome == null || nome.isBlank()) {
            encaminharErro(request, response, "O nome deve ser informado.");
            return;
        }

        try {
            int idade = Integer.parseInt(idadeTexto);
            if (idade < 0 || idade > 130) {
                encaminharErro(request, response,
                        "A idade deve estar entre 0 e 130 anos.");
                return;
            }

            Pessoa pessoa = new Pessoa(nome, idade);
            request.setAttribute("pessoa", pessoa);
            request.getRequestDispatcher("/resultado.jsp")
                    .forward(request, response);

        } catch (NumberFormatException e) {
            encaminharErro(request, response,
                    "A idade informada não é válida.");
        }
    }

    private void encaminharErro(HttpServletRequest request,
                                HttpServletResponse response,
                                String mensagem)
            throws ServletException, IOException {
        request.setAttribute("erro", mensagem);
        request.getRequestDispatcher("/erro.jsp")
                .forward(request, response);
    }
}
