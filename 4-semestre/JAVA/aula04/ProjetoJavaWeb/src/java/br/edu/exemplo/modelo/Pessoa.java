package br.edu.exemplo.modelo;

public class Pessoa {
        private String nome;
        private int idade;
        public Pessoa() { }
        public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
}

public String getNome() { return nome; }
public void setNome(String nome) { this.nome = nome; }
public int getIdade() { return idade; }
public void setIdade(int idade) { this.idade = idade; }
public String getFaixaEtaria() {
    if (idade < 12) return "Criança";
    if (idade < 18) return "Adolescente";
    if (idade < 60) return "Adulto";
    return "Idoso";
}
}
