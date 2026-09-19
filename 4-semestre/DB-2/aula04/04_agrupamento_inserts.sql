
#1
insert into itemvendas (idvenda,idproduto,quantidade,valorunitario,valoritem)
                  values (2, 7, 4, 50.00, 200.00);
insert into itemvendas (idvenda,idproduto,quantidade,valorunitario,valoritem)
                  values (3, 6, 3, 5.00, 15.00);
insert into itemvendas (idvenda,idproduto,quantidade,valorunitario,valoritem)
                  values (1, 6, 3, 5.00, 15.00);


#2
CREATE TABLE fornecedor (
    idfornecedor integer,
    nomefornecedor varchar(100),
    estado varchar(02)
);

insert into fornecedor (idfornecedor,nomefornecedor,estado)
       values (1, 'fornecedor 01', 'SP');
insert into fornecedor (idfornecedor,nomefornecedor,estado)
       values (2, 'fornecedor 02', 'SP');
insert into fornecedor (idfornecedor,nomefornecedor,estado)
       values (3, 'fornecedor 03', 'MG');
insert into fornecedor (idfornecedor,nomefornecedor,estado)
       values (4, 'fornecedor 04', 'MS');

#3
insert into produto (idproduto, descproduto, saldoestoque, perecivel, valorunitario, datavalidade)
values (8, 'produto 08', 10, 'S', 40, '2025-01-20');


#4
CREATE TABLE animal_grupo  (
    id serial PRIMARY KEY,
    nome VARCHAR (255) NOT NULL
);

INSERT INTO animal_grupo (nome)
VALUES
    ('Terrestre'),
    ('Aquatico'),
    ('Aereo');


 CREATE TABLE animal (
    id serial PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    tempovida DECIMAL (11, 2),
    animal_id INT NOT NULL,
    FOREIGN KEY (animal_id) REFERENCES animal_grupo (id)
);

INSERT INTO animal(nome, animal_id, tempovida)
VALUES
    ('vaca', 1, 10),
    ('cachorro', 1, 7),
    ('boi', 1, 13),
    ('lobo', 1, 11),
    ('baleia azul', 2, 80),
    ('golfinho', 2, 5),
    ('cavalo marinho', 2, 3),
    ('polvo', 2, 8),
    ('morcego', 3, 4),
    ('esquilos voadores', 3, 1),
    ('Petauro', 3, 2);


#5
create table grupoproduto (
    id serial PRIMARY KEY,
    descricao varchar(100)
);

insert into grupoproduto (descricao)
VALUES ('Alimento'), ('Higiene Pessoal'), ('Limpeza')

alter table produto add column idgrupoproduto int;
update produto set idgrupoproduto = 1 where idproduto in (4,5,6,7);
update produto set idgrupoproduto = 2 where idproduto = 1;
update produto set idgrupoproduto = 3 where idproduto in (2,3);