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
				  
create or replace function sp_ola() returns text as 
$$
begin 
return 'Olá Mundo!!';
end;
$$
language PLPGSQL;
select sp_ola();


create or replace function sp_ola2(frase text) returns text as
$$
begin
return frase;
end;
$$
language PLPGSQL;

select sp_ola2('Olá Mundo!!');

create function soma(valorA integer, valorb integer) returns integer as $$
declare
valor_total integer = 0;
begin
valor_total = valorA + valorB;
return valor_total;
end;
$$ language plpgsql;

select soma(5,3);

create or replace function valor_vendas() returns decimal(15,2) as $$
declare valorvenda decimal(15,2);
begin
	select into valorvenda sum(valoritem) from itemvendas;
		return valorvenda;
end; 
$$ language PLPGSQL

create or replace function valor_vendas(id_venda int) returns decimal(15,2) as $$
declare valorvenda decimal(15,2);
begin
	if (id_venda > 0) then
		select into valorvenda sum(valoritem) from itemvendas where
			idvenda = id_venda;
	else
		return 0;
	end if;
	return valorvenda;
end;
$$ language PLPGSQL;

create or replace function gera_entrega_venda(id_venda int) returns text as $$
declare
	vendas_rec record;
begin
	select into vendas_rec * from venda where idvenda = id_venda;

	if vendas_rec.enderecoentrega is null or vendas_rec.enderecoentrega = '' then
		return 'Endereço não informado';
			else
				return vendas_rec.enderocoentrega;
	end if;
end;
$$ language PLPGSQL;

create or replace function lista_venda()
returns setof record as
$$
declare
    reg record;
begin
    for reg in
        (
            select 
                i.idvenda,
                i.idproduto,
                p.descproduto,
                v.idcliente,
                c.nomecliente,
                i.quantidade
            from itemvendas as i
                inner join venda as v on v.idvenda = i.idvenda
                inner join produto as p on p.idproduto = i.idproduto
                inner join cliente as c on c.idcliente = v.idcliente
        )
    loop
        return next reg;
    end loop;

    return;
end;
$$ language plpgsql;



select * from lista_venda() as (idvenda int, idproduto int, descproduto varchar, idcliente int, nomecliente varchar, quantidade numeric);


create table teste (
	idvenda int,
	idproduto int,
	descproduto varchar(100),
	idcliente int,
	nomecliente varchar(100),
	quantidade numeric(15, 3));
	

