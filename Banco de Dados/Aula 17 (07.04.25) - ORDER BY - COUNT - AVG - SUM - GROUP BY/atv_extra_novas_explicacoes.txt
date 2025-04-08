CREATE DATABASE atv_extra;

USE atv_extra;

CREATE TABLE estacionamento(
id_estacionamento INT NOT NULL AUTO_INCREMENT,
nome_estacionamento VARCHAR(100),
capacidade INT,
subsolo ENUM ('SIM','NÃO'),
especial ENUM ('SIM','NÃO'),
PRIMARY KEY (id_estacionamento)
);

INSERT INTO estacionamento
(nome_estacionamento, capacidade, subsolo, especial)
VALUES
('A', 20, 'NÃO', 'NÃO'),
('B', 35, 'SIM', 'SIM'),
('C', 40, 'SIM', 'SIM'),
('D', 50, 'SIM', 'SIM'),
('E', 15, 'SIM', 'NÃO'),
('F', 85, 'SIM', 'SIM'),
('G', 100, 'NÃO', 'NÃO');

SELECT nome_estacionamento, capacidade
FROM estacionamento
WHERE capacidade BETWEEN 20 AND 40
AND subsolo = 'SIM'
AND especial = 'SIM'
ORDER BY capacidade ASC;

-- outra forma:
-- SELECT nome_estacionamento, capacidade
-- FROM estacionamento
-- WHERE capacidade >= 20 AND capacidade <= 40
-- AND subsolo = 'SIM'
-- AND especial = 'SIM'
-- ORDER BY capacidade ASC;

SELECT * FROM estacionamento
WHERE capacidade > 50
ORDER BY capacidade DESC;

SELECT * FROM estacionamento
WHERE capacidade > 80
OR nome_estacionamento = 'B';

SELECT * FROM estacionamento
WHERE subsolo = 'SIM'
AND especial = 'SIM';

CREATE TABLE cliente(
id_nome_cliente INT NOT NULL AUTO_INCREMENT,
nome_cliente VARCHAR (100),
PRIMARY KEY (id_nome_cliente)
);

CREATE TABLE mensalidade(
id_mensalidade INT NOT NULL AUTO_INCREMENT,
valor DECIMAL (8,2),
status_pagamento VARCHAR(100),
nome_cliente_id INT,
PRIMARY KEY (id_mensalidade),
FOREIGN KEY (nome_cliente_id)
REFERENCES cliente (id_nome_cliente)
);

INSERT INTO cliente 
(nome_cliente)
VALUES
('Jose'),
('Carlos'),
('Marcos');

INSERT INTO mensalidade
(nome_cliente_id, valor, status_pagamento)
VALUES
(1, 650.00, 'Fatura Paga'),
(2, 670.00, 'Fatura Paga'),
(3, 690.00, 'Fatura Paga'),
(1, 720.00, 'Em débito'),
(2, 740.00, 'Em débito'),
(3, 760.00, 'Em débito'),
(3, 800.00, 'Em débito');

-- Abaixo faz uma contagem de colunas preenchidas
SELECT count(mensalidade.status_pagamento) FROM mensalidade;

-- Abaixo faz a contagem de cliente por mensalidade
SELECT cliente.nome_cliente, COUNT(mensalidade.id_mensalidade) FROM mensalidade
JOIN cliente
ON cliente.id_nome_cliente = mensalidade.nome_cliente_id
GROUP BY nome_cliente;

-- Abaixo soma o total da mensalidade, e agrupa com o nome dos alunos
SELECT cliente.nome_cliente, SUM(mensalidade.valor) FROM mensalidade
JOIN cliente
ON cliente.id_nome_cliente = mensalidade.nome_cliente_id
GROUP BY nome_cliente;

-- Media dos valores
SELECT cliente.nome_cliente, avg(mensalidade.valor) FROM mensalidade
JOIN cliente
ON cliente.id_nome_cliente = mensalidade.nome_cliente_id
GROUP BY nome_cliente;

-- Como ajustar o nome da coluna provisoriamente
SELECT cliente.nome_cliente, avg(mensalidade.valor) AS media_da_mensalidade FROM mensalidade
JOIN cliente
ON cliente.id_nome_cliente = mensalidade.nome_cliente_id
GROUP BY nome_cliente;

