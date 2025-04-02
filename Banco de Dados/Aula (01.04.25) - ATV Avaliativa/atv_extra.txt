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

