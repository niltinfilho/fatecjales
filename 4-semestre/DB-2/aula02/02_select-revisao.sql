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
where 
	nome_cliente like 'A%'
	or nome_cliente like 'B%'
	or nome_cliente like 'C%'
	or nome_cliente like 'D%'
	or nome_cliente like 'E%'
	or nome_cliente like 'F%'
;

-- 22
select descricao_produto
from produto
where unidade != 'M' and unidade != 'Kg';

	
	
	
	
	
	
	
	
	
	