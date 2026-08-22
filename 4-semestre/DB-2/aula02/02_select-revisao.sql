-- 1
select c.nome_cliente, c.endereco, c.uf
from cliente c;

-- 2
select * 
from vendedor;

-- 3
select ip.codigo_produto, ip.quantidade
from item_pedido ip;

-- 4
select distinct codigo_cliente
from pedido;

-- 5
select 
	codigo_produto as "codigo_do_produto",
	descricao_produto as "descricao_do_produto",
	val_unit as "valor_unitario_do_produto"
from produto;

-- 6
select 
	nome_cliente as "nome_do_cliente",
	uf as "estado"
from cliente;

-- 7
select cidade
from cliente;

-- 8
select 
	descricao_produto,
	val_unit as "valor_original",
	val_unit * 1.3 as "valor_multiplicado"
from produto;

-- 9
select
	codigo_cliente,
	prazo_entrega as "prazo_entrega_original",
	prazo_entrega + 3 as "prazo_entrega_prorrogado"
from pedido;

-- 10
select nome_vendedor, faixa_comissao
from vendedor
where salario_fixo > 4000;

-- 11
select *
from produto
where unidade = 'Kg';

-- 12
select nome_cliente, cidade
from cliente
where uf = 'SP' or cidade = 'Londrina';

-- 13
select num_pedido, prazo_entrega
from pedido
where codigo_cliente = 720 and codigo_vendedor = 101;

-- 14
select distinct num_pedido
from item_pedido
where quantidade >= 30;

-- 15
select *
from vendedor
where faixa_comissao != 'C';

-- 16
select descricao_produto
from produto
where unidade != 'M';

-- 17
select nome_vendedor
from vendedor
where salario_fixo >= 1000 and salario_fixo <= 3000;

-- 18
select num_pedido, prazo_entrega
from pedido
where prazo_entrega >= 15 and prazo_entrega <= 25;

-- 19
select *
from vendedor
where nome_vendedor not like 'J%';

-- 20
select *
from cliente
where nome_cliente like '%io%';

-- 21
select *
from cliente
where substring(nome_cliente, 1, 1) between 'A' and 'F';

select *
from cliente
where substring(nome_cliente, 1, 1) between 'A' and 'F';

-- 22
select descricao_produto
from produto
where unidade != 'M' and unidade != 'Kg';

-- 23
select *
from vendedor
where faixa_comissao is null or faixa_comissao = '';

-- 24
select *
from cliente
where ie is not null;

-- 25
select *
from cliente
order by nome_cliente asc;

-- 26
select nome_vendedor,salario_fixo
from vendedor
order by nome_vendedor;

-- 27
select nome_cliente, endereco
from cliente
where uf = 'SP'
order by codigo_cliente asc;

-- 28
select num_pedido
from pedido
where prazo_entrega = 20
order by num_pedido desc;

-- 29
select faixa_comissao, nome_vendedor, codigo_vendedor
from vendedor
order by faixa_comissao, nome_vendedor;

-- 30
select uf, nome_cliente
from cliente
where substring(nome_cliente,1, 1) between 'P' and 'Z';
	
-- 31
(select *
from produto
order by val_unit asc limit 1)
union all
(select *
from produto
order by val_unit desc limit 1);
	
-- 32
select 
	sum(salario_fixo) / count(codigo_vendedor) as media,
	sum(salario_fixo) as soma
from vendedor;

-- 33
select count(codigo_cliente) as quantidade_cliente
from cliente
where ie is not null;

-- 34
select 
	(
		select salario_fixo as maior_salario
		from vendedor
		where faixa_comissao = 'A'
		order by salario_fixo desc limit 1
	),
	sum(salario_fixo) as soma_salario
from vendedor
where faixa_comissao = 'A';

-- 35
select sum(quantidade)
from item_pedido
where codigo_produto = 77;

-- 36
select count(val_unit)
from produto
where val_unit < 2;
	
	
	
	