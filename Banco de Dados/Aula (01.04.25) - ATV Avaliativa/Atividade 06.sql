CREATE DATABASE atv_avaliativa;

USE atv_avaliativa;

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT,
nome_cliente VARCHAR (100),
data_nascimento DATE,
PRIMARY KEY (id_cliente)
);

CREATE TABLE categoria(
id_categoria INT NOT NULL AUTO_INCREMENT,
nome_categoria VARCHAR (100),
descricao VARCHAR (100),
PRIMARY KEY (id_categoria)
);

CREATE TABLE veiculo(
id_veiculo INT NOT NULL AUTO_INCREMENT,
placa_veiculo VARCHAR(12),
cor_veiculo VARCHAR (100),
cliente_id INT,
categoria_id INT,
PRIMARY KEY (id_veiculo),
FOREIGN KEY (cliente_id)
REFERENCES cliente (id_cliente),
FOREIGN KEY (categoria_id)
REFERENCES categoria (id_categoria)
);

CREATE TABLE estacionamento(
id_estacionamento INT NOT NULL AUTO_INCREMENT,
nome_estacionamento VARCHAR(100),
capacidade_estacionamento INT,
data_entrada DATE,
data_saida DATE,
hora_entrada TIME,
hora_saida TIME,
veiculo_id INT,
PRIMARY KEY (id_estacionamento),
FOREIGN KEY (veiculo_id)
REFERENCES veiculo (id_veiculo)
);

INSERT INTO cliente 
(nome_cliente, data_nascimento) 
VALUES
('João Silva', '1985-02-15'),
('Maria Oliveira', '1992-07-10'),
('Carlos Souza', '1978-11-30');

INSERT INTO categoria 
(nome_categoria, descricao) 
VALUES
('UTILITARIO', 'Veículo de uso comercial ou para transporte de carga'),
('VAN', 'Veículo de passageiros, geralmente utilizado para transporte de grupos'),
('PICK-UP', 'Veículo de carga com caçamba para transporte de mercadorias');

INSERT INTO veiculo 
(placa_veiculo, cor_veiculo, cliente_id, categoria_id) 
VALUES
('ABC-1234', 'Preto', 1, 1),
('XYZ-5678', 'Branco', 2, 2),
('DEF-9876', 'Vermelho', 3, 3),
('GHI-4321', 'Azul', 1, 3),
('JKL-8765', 'Prata', 2, 1);

INSERT INTO estacionamento 
(nome_estacionamento, capacidade_estacionamento, data_entrada, data_saida, hora_entrada, hora_saida, veiculo_id) 
VALUES
('Estacionamento Central', 50, '2025-04-01', '2025-04-02', '08:00:00', '18:00:00', 1),
('Estacionamento Norte', 30, '2025-04-02', '2025-04-03', '09:30:00', '20:00:00', 2),
('Estacionamento Sul', 40, '2025-04-01', '2025-04-01', '07:15:00', '10:00:00', 3),
('Estacionamento Leste', 25, '2025-04-02', '2025-04-03', '12:00:00', '16:00:00', 2),
('Estacionamento Oeste', 60, '2025-03-31', '2025-04-01', '10:00:00', '14:00:00', 3),
('Estacionamento VIP', 10, '2025-04-01', '2025-04-01', '15:00:00', '19:00:00', 1);

SELECT * FROM veiculo
JOIN categoria
ON categoria.id_categoria = veiculo.categoria_id
JOIN cliente
ON veiculo.cliente_id = cliente.id_cliente;

SELECT * FROM veiculo
LEFT JOIN cliente
ON veiculo.cliente_id = cliente.id_cliente;

SELECT * FROM veiculo
RIGHT JOIN categoria
ON veiculo.categoria_id = categoria.id_categoria;

SELECT * FROM veiculo
LEFT JOIN cliente
ON veiculo.cliente_id = cliente.id_cliente
UNION
SELECT * FROM veiculo
RIGHT JOIN cliente
ON veiculo.cliente_id = cliente.id_cliente;

SELECT id_veiculo, placa_veiculo, cor_veiculo, nome_cliente
FROM veiculo
JOIN cliente
ON cliente.id_cliente = veiculo.cliente_id;

CREATE VIEW vw_veiculo_cliente AS
SELECT id_veiculo, placa_veiculo, cor_veiculo, nome_cliente
FROM veiculo
JOIN cliente
ON cliente.id_cliente = veiculo.cliente_id;
