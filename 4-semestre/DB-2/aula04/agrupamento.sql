insert into itemvendas (idvenda, idproduto, quantidade, valorunitario, valoritem)
	values (2, 7, 4, 50.00, 200.00);

insert into itemvendas (idvenda, idproduto, quantidade, valorunitario, valoritem)
	values (3, 6, 3, 5.00, 15.00);

insert into itemvendas (idvenda, idproduto, quantidade, valorunitario, valoritem)
	values (1, 6, 3, 50.00, 200.00);

select i.idproduto, p.descproduto, sum(i.quantidade)
from itemvendas i
inner join produto p
on i.idproduto = p.idproduto
group by i.idproduto, p.descproduto;

select i.idproduto, p.descproduto, sum(i.quantidade)
from itemvendas i
inner join produto p
on i.idproduto = p.idproduto
group by i.idproduto, p.descproduto
order by p.descproduto desc;

select i.idproduto, p.descproduto, sum(i.quantidade)
from itemvendas i
inner join produto p
on i.idproduto = p.idproduto
group by i.idproduto, p.descproduto
having sum(i.quantidade) >= 9
order by p.descproduto desc;

select i.idproduto, p.descproduto, sum(i.quantidade)
from itemvendas i
inner join produto p
on i.idproduto = p.idproduto
where p.perecivel = 'S'
group by i.idproduto, p.descproduto
having sum(i.quantidade) >= 9
order by p.descproduto desc;

select idcliente as id, nomecliente as nome, estado
from cliente
union
select idfornecedor as id, nomefornecedor as nome, estado
from fornecedor
order by nome;

select p.idproduto from produto p
intersect
select i.idproduto from itemvendas i;

select p.idproduto from produto p
except
select i.idproduto from itemvendas i;

select * from venda v
where idcliente = (select idcliente from cliente c where c.estado = 'MS');

select * from itemvendas i
where i.idproduto in
	(select idproduto from produto where perecivel = 'S');

select
	id, 
	nome,
	tempovida,
	rank () over (
		order by tempovida desc
) rank_tempovida
from animal;

select v.idproduto, p.descproduto,
	sum(v.quantidade) quantidade_vendida,
	rank () over (order by sum(v.quantidade) desc)
	as indicador_vendas
from itemvendas v
inner join produto p
on v.idproduto = p.idproduto
group by v.idproduto, p.descproduto;

select 
	g.nome as grupo,
	a.nome,
	a.tempovida,
	rank () over (
		partition by g.id
		order by tempovida desc
	) rank_tempovida
from animal a
inner join animal_grupo g
	on a.animal_id = g.id;

select 
	v.idproduto,
	g.descricao as grupoproduto,
	p.descproduto,
	sum(v.quantidade) as quantidade_vendida,
	rank () over (
		partition by g.descricao
		order by sum(v.quantidade) desc 
	) as indicador_vendas
from itemvendas v
inner join produto p
	on v.idproduto = p.idproduto
inner join grupoproduto g
	on p.idgrupoproduto = g.id 
group by v.idproduto, g.descricao, p.descproduto;














