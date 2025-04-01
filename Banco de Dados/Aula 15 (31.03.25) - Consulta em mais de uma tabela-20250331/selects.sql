CREATE DATABASE aula_13_03;

USE aula_13_03;

CREATE TABLE acompanhamento(
id_acompanhamento INT NOT NULL AUTO_INCREMENT,
situacao VARCHAR (100),
PRIMARY KEY (id_acompanhamento)
);

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT,
nome_cliente VARCHAR (45),
cidade_cliente VARCHAR (45),
PRIMARY KEY (id_cliente)
);

CREATE TABLE pedido(
id_pedido INT NOT NULL AUTO_INCREMENT,
data_pedido DATE,
valor DECIMAL(8,2),
cliente_id INT,
acompanhamento_id INT,
PRIMARY KEY (id_pedido),
FOREIGN KEY (cliente_id)
REFERENCES cliente (id_cliente),
FOREIGN KEY (acompanhamento_id)
REFERENCES acompanhamento (id_acompanhamento)
);

INSERT INTO acompanhamento 
(situacao)
VALUES 
('Registrado'),
('Em Transporte'),
('Entregue');

INSERT INTO cliente
(nome_cliente, cidade_cliente)
VALUES
('João','Macaé'),
('Carlos','Salvador'),
('Maria','Niteroí'),
('Ana','Campinas'),
('Marcos','Santos');

INSERT INTO pedido
(data_pedido, valor, cliente_id, acompanhamento_id)
VALUES
('2024-09-24', 250, 2, 1),
('2024-09-25', 150, 1, 2),
('2024-09-25', 450, 4, 3);


SELECT * FROM acompanhamento;
SELECT * FROM cliente;
SELECT * FROM pedido;

-- Como pesquisar informações entre DUAS tabelas,
-- neste caso, a conexão entre as planilhas era a chave estrangeira
-- id_cliente, neste caso, fazemos da seguinte forma: 
SELECT * FROM pedido
JOIN cliente
ON cliente.id_cliente = pedido.cliente_id;
-- determinados as tabelas e aplicamos junto com a chave igualitaria das tabelas, como acima.
-- JOIN = Juntar

-- Como pesquisar informações entre TRES ou MAIS tabelas,
SELECT * FROM pedido
JOIN cliente
ON cliente.id_cliente = pedido.cliente_id
JOIN acompanhamento
ON pedido.acompanhamento_id = acompanhamento.id_acompanhamento;
-- determinados as tabelas e aplicamos junto com a chave igualitaria das tabelas, como acima.
 
-- Como pesquisar informações entre tabelas, APENAS com as colunas necesarias, subtitui o * pelo nome da tabela mais o nome da coluna em sequencia.
SELECT pedido.id_pedido, pedido.data_pedido, cliente.nome_cliente, acompanhamento.situacao FROM pedido
JOIN cliente
ON cliente.id_cliente = pedido.cliente_id
JOIN acompanhamento
ON pedido.acompanhamento_id = acompanhamento.id_acompanhamento;

-- Como criar uma VIEW, consultas recorrentes:
CREATE VIEW vw_consulta_pedido_situacao AS
SELECT pedido.id_pedido, pedido.data_pedido, cliente.nome_cliente, acompanhamento.situacao FROM pedido
JOIN cliente
ON cliente.id_cliente = pedido.cliente_id
JOIN acompanhamento
ON pedido.acompanhamento_id = acompanhamento.id_acompanhamento;
-- Ela ficará salva no banco de dados, abaixo das tabelas (canto superior esquerdo)

-- JOIN = Juntar Relação EXISTENTE entre dados de duas tabelas
-- LEFT JOIN = Traz todas as informações que estão a esquerda do LEFT JOIN, o codigo endende a palavra a esquerda.
-- RIGHT JOIN = Traz todas as informações que estão a direita do LEFT JOIN, o codigo endende a palavra a direita
-- FULL JOIN =  Juntar tudo


