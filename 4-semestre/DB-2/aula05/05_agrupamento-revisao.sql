-- 37
select
	count(codigo_cliente) as quantidade, 
	uf 
from cliente
group by uf;

-- 38
select 
	count(codigo_vendedor) as quantidade_funcionario, 
	sum(salario_fixo) as soma_salario,
	faixa_comissao
from vendedor
group by faixa_comissao
order by faixa_comissao;

-- 39
select
	sum(val_unit) soma_valor, 
	unidade
from produto
group by unidade;

-- 40 
select
	count(num_pedido) as quantidade_pedido,
	codigo_vendedor
from pedido
where prazo_entrega > 7
group by codigo_vendedor, prazo_entrega;

-- 41







