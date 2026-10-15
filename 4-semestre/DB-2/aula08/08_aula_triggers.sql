create table contas(
   numero int,
   saldo numeric(15,2),
   tipo varchar(1)
);

create table total_contas(
    tipo varchar(10),
    quantidade int
);

INSERT INTO TOTAL_CONTAS VALUES ('FISICA', 0);
INSERT INTO TOTAL_CONTAS VALUES ('JURIDICA', 0);


create function incrementa_contas() 
returns trigger as 
$$
begin
  -- variável NEW reprsenta os valores do 
  -- registro que estará sendo manipulado
  if NEW.tipo ='F' then
     update total_contas set quantidade = quantidade +1
	 where tipo='FISICA';
  else
     update total_contas set quantidade = quantidade + 1
	 where tipo='JURIDICA';
  end if;
  return null;
end;
$$
Language plpgsql;

create trigger trigger_incrementa_contas 
after insert on contas 
for each row execute procedure incrementa_contas();

INSERT INTO CONTAS (numero, saldo, tipo) VALUES (1, 20.00, 'F');
INSERT INTO CONTAS (numero, saldo, tipo) VALUES (2, 10.00, 'F');
INSERT INTO CONTAS (numero, saldo, tipo) VALUES (3, 23.00, 'F');
INSERT INTO CONTAS (numero, saldo, tipo) VALUES (4, 0.00, 'J');
INSERT INTO CONTAS (numero, saldo, tipo) VALUES (5, 1.99, 'J');

select * from total_contas;





create or replace function msg_produto_excluido()
returns trigger as $$
begin
    raise notice 'Produto excluído com sucesso';
	return new;
end;
$$
language plpgsql;

create trigger t_prod_excluido
after delete
on produto
for each row
execute procedure msg_produto_excluido();

insert into produto (descproduto, saldoestoque) values ('teste',1);

select * from produto;

delete from produto where idproduto=8;
