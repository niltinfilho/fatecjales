/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package br.edu.exemplo.controle;

import br.edu.exemplo.modelo.Pessoa;
import java.io.IOException;
import java.io.PrintWriter;
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
 int idade = Integer.parseInt(idadeTexto);
     Pessoa pessoa = new Pessoa(nome, idade);
 request.setAttribute("pessoa", pessoa);
 request.getRequestDispatcher("/resultado.jsp")
 .forward(request, response);
 }
}