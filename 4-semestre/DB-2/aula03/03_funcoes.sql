-- Active: 1708781131871@@127.0.0.1@5432@bdaula@public
create table cliente ( idcliente serial primary key, nomecliente varchar(100), estado varchar(2));
insert into cliente(nomecliente, estado) values ('Antonio','SP');
insert into cliente(nomecliente, estado) values ('Joao', 'SP');
insert into cliente(nomecliente, estado) values ('Jose', 'MG');
insert into cliente(nomecliente, estado) values ('Maria', 'MS');
insert into cliente(nomecliente, estado) values ('Joaquina', 'MG');

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
  
  alter table produto add column perecivel varchar(1);
  
  alter table produto add column valorunitario numeric(15,3);
  
  update produto set valorunitario = 10 where idproduto = 1;
  
  update produto set valorunitario = 20 where idproduto = 2;
  
  update produto set valorunitario = 30 where idproduto = 3;
  
  update produto set valorunitario = 40 where idproduto = 4;
  
  update produto set valorunitario = 50 where idproduto = 5;
  
  update produto set perecivel = 'S' where idproduto = 1;
  
  update produto set perecivel = 'S' where idproduto = 2;
  
  update produto set perecivel = null where idproduto = 3;
	  
  update produto set perecivel = 'S' where idproduto = 4;
  
  select * from produto where valorunitario is null;
  
  select * from produto where valorunitario between 20 and 40;
  
  select * from cliente where estado in ('SP', 'MG');
  
  select * from cliente where nomecliente like 'A%';
  
  select * from cliente where nomecliente like '__t%';
  
  select * from cliente where nomecliente like '%aq%';
  
  select * from cliente where nomecliente like '%io';
  
  select avg(valoritem) from itemvendas;
  
  select count(*) from itemvendas where idvenda = 1;
  
  select max(valoritem) from itemvendas;
  
  select min(valoritem) from itemvendas;
  
  select sum(valoritem) from itemvendas where idvenda =1;
  
  alter table produto add column datavalidade DATE;
  
  update produto set datavalidade = '2024-12-31' where idproduto = 1;
 
  update produto set datavalidade = '2025-07-31' where idproduto = 2;
   
  update produto set datavalidade = '2025-12-31' where idproduto = 3;
  
  update produto set datavalidade = '2024-04-30' where idproduto = 4;

  update produto set datavalidade = '2024-05-31' where idproduto = 5;
  
  update produto set datavalidade = '2024-06-15' where idproduto = 6;
  
  update produto set datavalidade = '2024-07-10' where idproduto = 7;
  
  select descproduto, datavalidade, (datavalidade - DATE '2024-03-13')/30 as dias_para_vencimento from produto;
  
  select descproduto, datavalidade, age(datavalidade, '2024-03-13') as anos_meses_dias from produto;
  
  select extract(hour from now()) as hora,
  extract(minute from now()) as minuto,
  extract(second from now()) as segundo;
  
  select * from produto p 
  where extract(year from datavalidade) = 2024
  and extract(month from datavalidade) between 4 and 7;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
				  
				  