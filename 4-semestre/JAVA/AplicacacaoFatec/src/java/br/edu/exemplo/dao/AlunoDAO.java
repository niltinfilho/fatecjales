package br.edu.exemplo.dao;

import br.edu.exemplo.conexao.Conexao;
import br.edu.exemplo.modelo.Aluno;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class AlunoDAO {

    public List<Aluno> listar() throws SQLException {
        List<Aluno> alunos = new ArrayList<>();
        String sql = "SELECT id, nome, email, curso, semestre, turno FROM aluno ORDER BY id";
        try (Connection conexao = Conexao.conectar(); PreparedStatement comando = conexao.prepareStatement(sql); ResultSet resultado = comando.executeQuery()) {
            while (resultado.next()) {
                Aluno aluno = new Aluno();
                aluno.setId(resultado.getInt("id"));
                aluno.setNome(resultado.getString("nome"));
                aluno.setEmail(resultado.getString("email"));
                aluno.setCurso(resultado.getString("curso"));
                aluno.setSemestre(resultado.getInt("semestre"));
                aluno.setTurno(resultado.getString("turno"));
                alunos.add(aluno);
            }
        }
        return alunos;
    }

public Aluno buscarPorId(int id) throws SQLException {
        String sql
                = "SELECT id, nome, email, curso, semestre, turno "
                + "FROM aluno WHERE id = ?";
        try (Connection conexao = Conexao.conectar(); PreparedStatement comando = conexao.prepareStatement(sql)) {

            comando.setInt(1, id);
            try (ResultSet resultado = comando.executeQuery()) {
                if (resultado.next()) {
                    Aluno aluno = new Aluno();
                    aluno.setId(resultado.getInt("id"));
                    aluno.setNome(resultado.getString("nome"));
                    aluno.setEmail(resultado.getString("email"));
                    aluno.setCurso(resultado.getString("curso"));
                    aluno.setSemestre(resultado.getInt("semestre"));
                    aluno.setTurno(resultado.getString("turno"));
                    return aluno;
                }
            }
        }
        return null;
    }
}
