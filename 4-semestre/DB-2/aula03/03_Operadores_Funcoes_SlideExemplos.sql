-- Active: 1708781131871@@127.0.0.1@5432@bdaula@public

## aula de funcoes e operadores

select * from produto

#crie os atributos em produto
alter table produto add column perecivel varchar(1);
alter table produto add column valorunitario numeric(15,3);

#inclua valores nos produtos
update produto set valorunitario = 10 where idproduto = 1;
update produto set valorunitario = 20 where idproduto = 2;
update produto set valorunitario = 30 where idproduto = 3;
update produto set valorunitario = 40 where idproduto = 4;
update produto set valorunitario = 50 where idproduto = 5;

#atualize os valores de pericivel nos produtos
update produto set perecivel = 'S' where idproduto = 1;
update produto set perecivel = 'S' where idproduto = 2;
update produto set perecivel = 'S' where idproduto = 4;

select * from produto where valorunitario is null;

select * from produto where valorunitario BETWEEN 20 and 40;

select * from cliente

select * from cliente where estado in ('SP','MG');

select * from cliente where nomecliente like 'A%'

select * from cliente where nomecliente like '__t%'

select * from cliente where nomecliente like '%aq%'

select * from cliente where nomecliente like '%io'

select * from itemvendas;

select avg(valoritem) from itemvendas;

select count(*) from itemvendas where idvenda=1;

select max(valoritem) from itemvendas;

select min(valoritem) from itemvendas;

select sum(valoritem) from itemvendas where idvenda = 1;

select * from itemvendas where idvenda = 1;

alter table produto add column datavalidade DATE;
select * from produto

update produto set datavalidade = '2024-12-31' where idproduto = 1;
update produto set datavalidade = '2025-7-31' where idproduto = 2;
update produto set datavalidade = '2025-12-31' where idproduto = 3;
update produto set datavalidade = '2024-4-30' where idproduto = 4;
update produto set datavalidade = '2024-5-31' where idproduto = 5;
update produto set datavalidade = '2024-6-15' where idproduto = 6;
update produto set datavalidade = '2024-7-10' where idproduto = 7;

select descproduto, datavalidade, 
       (datavalidade - DATE '2024-03-13') as dias_para_vencimento from produto;


select descproduto, datavalidade, 
       (datavalidade - DATE '2024-03-13')/30 as dias_para_vencimento from produto;


select descproduto, datavalidade, 
       age(datavalidade, '2024-03-13') as anos_meses_dias from produto;

select extract(HOUR from now()) as hora,
       extract(MINUTE from now()) as minuto,
       extract(SECOND from now()) as segundo        


select * from produto

select * from produto 
 where extract(year from datavalidade) = 2024 
   and extract(month from datavalidade) BETWEEN 4 and 7;

select ascii('A');

select 'Joao' || 'Maria' || 'Silva' as nomecompleto

select descproduto || ' vence em ' || datavalidade as "vencimento" from produto;

select descproduto, 
       length(descproduto) as numero_caracteres 
       from produto


select upper(descproduto) as maiusculas, 
       lower(descproduto) as minusculas 
  from produto


