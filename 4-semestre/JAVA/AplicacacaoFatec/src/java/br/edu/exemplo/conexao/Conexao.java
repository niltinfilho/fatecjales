package br.edu.exemplo.conexao;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Connection;

public class Conexao {

    private static final String URL = "jdbc:postgresql://localhost:5433/primeira_aplicacao_web";
    private static final String USUARIO = "postgres";
    private static final String SENHA = "5432";

    public static Connection conectar() throws SQLException {
        return DriverManager.getConnection(URL, USUARIO, SENHA);
    }
}
