CREATE TYPE sexo_enum AS ENUM ('MASCULINO', 'FEMININO');

CREATE TABLE area (
	id_area BIGSERIAL PRIMARY KEY,
	nome VARCHAR(120) NOT NULL
);

CREATE TABLE perfil (
	id_perfil BIGSERIAL PRIMARY KEY,
	nome VARCHAR(120) NOT NULL
);

CREATE TABLE perfil_area (
	id_perfil_area BIGSERIAL PRIMARY KEY,
	id_perfil INT8 NOT NULL,
	id_area INT8 NOT NULL,
	CONSTRAINT fk_id_perfil FOREIGN KEY (id_perfil) REFERENCES public.perfil(id_perfil),
	CONSTRAINT fk_id_area FOREIGN KEY (id_area) REFERENCES public.area(id_area)
);

CREATE TABLE pessoa (
	id_pessoa BIGSERIAL PRIMARY KEY,
	nome_pessoa VARCHAR(120) NOT NULL,
	rg_pessoa VARCHAR(20) UNIQUE,
	cpf_pessoa VARCHAR(14) UNIQUE,
	sexo sexo_enum,
	email_pessoa VARCHAR(150),
	data_nasc_nessoa DATE,
	naturalidade_pessoa VARCHAR(100),
	nacionalidade_pessoa VARCHAR(100),
	estado_civil_pessoa VARCHAR(40),
	rua_pessoa VARCHAR(100),
	numero_pessoa VARCHAR(100),
	complemento_pessoa VARCHAR(100),
	bairro_pessoa VARCHAR(100),
	cidade_pessoa VARCHAR(100),
	cep_pessoa VARCHAR(100),
	uf_pessoa VARCHAR(100),
	telefone_pessoa VARCHAR(14),
	celular_pessoa VARCHAR(15)
);

CREATE TABLE usuario (
	id_usuario BIGSERIAL PRIMARY KEY,
	username VARCHAR(100) NOT NULL UNIQUE,
	password VARCHAR(100) NOT NULL,
	id_pessoa INT8 NOT NULL UNIQUE,
	id_perfil INT8,
	CONSTRAINT fk_id_pessoa FOREIGN KEY (id_pessoa) REFERENCES public.pessoa(id_pessoa),
	CONSTRAINT fk_id_perfil FOREIGN KEY (id_perfil) REFERENCES public.perfil(id_perfil)
);

CREATE TABLE paciente (
    id_paciente INT8 PRIMARY KEY,
    cartao_sus VARCHAR(50),
    cartao_cidadao VARCHAR(50),
    situacao VARCHAR(50),
    CONSTRAINT fk_paciente_pessoa FOREIGN KEY (id_paciente) REFERENCES public.pessoa(id_pessoa)
);

CREATE TABLE atendente (
    id_atendente INT8 PRIMARY KEY,
    situacao VARCHAR(50),
    CONSTRAINT fk_atendente_pessoa FOREIGN KEY (id_atendente) REFERENCES public.pessoa(id_pessoa)
);

CREATE TABLE administrador (
    id_administrador INT8 PRIMARY KEY,
    situacao VARCHAR(50),
    CONSTRAINT fk_administrador_pessoa FOREIGN KEY (id_administrador) REFERENCES public.pessoa(id_pessoa)
);

CREATE TABLE especialidade (
    id_especialidade BIGSERIAL PRIMARY KEY,
    descricao_especialidade VARCHAR(150) NOT NULL,
    situacao VARCHAR(50)
);

CREATE TABLE medico (
    id_medico INT8 PRIMARY KEY,
    crm_medico VARCHAR(30) NOT NULL,
	id_especialidade INT8 NOT NULL,
    situacao VARCHAR(50),
    CONSTRAINT fk_medico_pessoa FOREIGN KEY (id_medico) REFERENCES public.pessoa(id_pessoa),
	CONSTRAINT fk_id_especialidade FOREIGN KEY (id_especialidade) REFERENCES public.especialidade(id_especialidade)
);

CREATE TABLE ficha_medico (
    id_ficha_medico BIGSERIAL PRIMARY KEY,
    id_paciente INT8 NOT NULL,
    id_medico INT8 NOT NULL,
    anamnese TEXT,
    exame_fisico TEXT,
    hipotese_diagnostica TEXT,
    cid VARCHAR(20),
    prescricoes_medicas TEXT,
    data_cadastro DATE DEFAULT NOW(),
    situacao VARCHAR(50),
    CONSTRAINT fk_ficha_paciente FOREIGN KEY (id_paciente) REFERENCES paciente(id_paciente),
    CONSTRAINT fk_ficha_medico FOREIGN KEY (id_medico) REFERENCES medico(id_medico)
);