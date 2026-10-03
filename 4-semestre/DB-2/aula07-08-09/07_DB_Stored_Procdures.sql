create table cliente ( idcliente serial primary key, nomecliente varchar(100));
insert into cliente(nomecliente) values ('Antonio');
insert into cliente(nomecliente) values ('Joao');
insert into cliente(nomecliente) values ('Jose');
insert into cliente(nomecliente) values ('Maria');
insert into cliente(nomecliente) values ('Joaquina');

create table produto( idproduto serial primary key, descproduto varchar(100), saldoestoque numeric(15,3));
insert into produto(descproduto, saldoestoque) values ('papel higienico', 200);
insert into produto(descproduto, saldoestoque) values ('detergente', 100);
insert into produto(descproduto, saldoestoque) values ('desinfetante', 250);
insert into produto(descproduto, saldoestoque) values ('arroz', 300);
insert into produto(descproduto, saldoestoque) values ('feijao', 150);
insert into produto(descproduto, saldoestoque) values ('creme de leite', 50);
insert into produto(descproduto, saldoestoque) values ('leite longa vida', 75);

create table venda (
	idvenda serial primary key, 
	idcliente int, 
	enderecoentrega varchar(100),
    constraint fk_cliente foreign key (idcliente) references cliente
);
insert into venda(idcliente,enderecoentrega) values (1,'rua 1');
insert into venda(idcliente,enderecoentrega) values (3,'rua 3');
insert into venda(idcliente,enderecoentrega) values (4,'rua 4');


create table itemvendas (
     iditem serial primary key,
	 idvenda int,
	 idproduto int,
	 quantidade numeric(15,3),
	 valorunitario numeric(15,3),
	 valoritem numeric(15,3),
	 constraint fk_vendaitem foreign key (idvenda) references venda,
	 constraint fk_produto foreign key (idproduto) references produto
  );
  
  insert into itemvendas (idvenda,idproduto,quantidade,valorunitario,valoritem)
                  values (1, 1, 10, 12.00, 120.00);
  insert into itemvendas (idvenda,idproduto,quantidade,valorunitario,valoritem)
                  values (1, 2, 6, 1.50, 9.00);				  
  insert into itemvendas (idvenda,idproduto,quantidade,valorunitario,valoritem)
                  values (1, 3, 3, 8.00, 24.00);
  insert into itemvendas (idvenda,idproduto,quantidade,valorunitario,valoritem)
                  values (1, 4, 2, 14.00, 28.00);
  insert into itemvendas (idvenda,idproduto,quantidade,valorunitario,valoritem)
                  values (2, 6, 3, 5.00, 15.00);
  insert into itemvendas (idvenda,idproduto,quantidade,valorunitario,valoritem)
                  values (2, 7, 12, 4, 48.00);
  insert into itemvendas (idvenda,idproduto,quantidade,valorunitario,valoritem)
                  values (3, 5, 2, 8, 16.00);				  
				  
				  