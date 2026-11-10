package br.edu.exemplo.repositorio;

import br.edu.exemplo.modelo.Aluno;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Repositório provisório em memória.
 * Os dados são perdidos quando o Tomcat é reiniciado ou a aplicação é republicada.
 */
public class AlunoRepositorio {
    private final Map<Integer, Aluno> alunos = new LinkedHashMap<>();
    private int proximoId = 1;

    public AlunoRepositorio() {
        salvar(new Aluno(0, "Ana Silva", "ana@email.com",
                "Sistemas de Informação", 2, "Noturno"));
        salvar(new Aluno(0, "Carlos Souza", "carlos@email.com",
                "Análise e Desenvolvimento de Sistemas", 4, "Noturno"));
    }

    public synchronized List<Aluno> listar() {
        return new ArrayList<>(alunos.values());
    }

    public synchronized Aluno buscarPorId(int id) {
        return alunos.get(id);
    }

    public synchronized void salvar(Aluno aluno) {
        if (aluno.getId() == 0) {
            aluno.setId(proximoId++);
        }
        alunos.put(aluno.getId(), aluno);
    }

    public synchronized boolean excluir(int id) {
        return alunos.remove(id) != null;
    }
}
