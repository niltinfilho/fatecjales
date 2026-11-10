package br.edu.exemplo.modelo;

public class Aluno {
    private int id;
    private String nome;
    private String email;
    private String curso;
    private int semestre;
    private String turno;

    public Aluno() { }

    public Aluno(int id, String nome, String email, String curso,
                 int semestre, String turno) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.curso = curso;
        this.semestre = semestre;
        this.turno = turno;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getCurso() { return curso; }
    public void setCurso(String curso) { this.curso = curso; }
    public int getSemestre() { return semestre; }
    public void setSemestre(int semestre) { this.semestre = semestre; }
    public String getTurno() { return turno; }
    public void setTurno(String turno) { this.turno = turno; }
}
