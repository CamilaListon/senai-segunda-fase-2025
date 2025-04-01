CREATE DATABASE familia;

USE familia;

CREATE TABLE filho(
id_filho INT NOT NULL AUTO_INCREMENT,
nome_filho VARCHAR(45),
PRIMARY KEY (id_filho)
);

CREATE TABLE pai(
id_pai INT NOT NULL AUTO_INCREMENT,
nome_pai VARCHAR(45),
filho_id INT,
FOREIGN KEY (filho_id)
REFERENCES filho (id_filho),
PRIMARY KEY (id_pai)
);

INSERT INTO filho
(nome_filho)
VALUES
('Joaozinho'),
('Mariazinha'),
('Carlinha'),
('Aninha');

INSERT INTO pai
(nome_pai, filho_id)
VALUES
('Antonio', 4),
('Antonio', 3),
('Carlos', 2);

INSERT INTO pai
(nome_pai)
VALUES
('Mateus');

SELECT * FROM filho;
SELECT * FROM pai;



-- JOIN = Relação EXISTENTE entre dados de duas tabelas
SELECT pai.nome_pai, filho.nome_filho FROM pai
JOIN filho
ON pai.filho_id = filho.id_filho;

-- LEFT JOIN = Traz todas as informações que estão a esquerda do LEFT JOIN, no caso abaixo, a tabela pai, pois o codigo endende a palavra a esquerda.
SELECT pai.nome_pai, filho.nome_filho FROM pai
LEFT JOIN filho
ON pai.filho_id = filho.id_filho;

-- RIGHT JOIN = Traz todas as informações que estão a direita do LEFT JOIN, no caso abaixo, a tabela filho, pois o codigo endende a palavra a direita
SELECT pai.nome_pai, filho.nome_filho FROM pai
RIGHT JOIN filho
ON pai.filho_id = filho.id_filho;

-- FULL JOIN =  Juntar tudo
SELECT pai.nome_pai, filho.nome_filho FROM pai
LEFT JOIN filho
ON pai.filho_id = filho.id_filho
UNION
SELECT pai.nome_pai, filho.nome_filho FROM pai
RIGHT JOIN filho
ON pai.filho_id = filho.id_filho;
