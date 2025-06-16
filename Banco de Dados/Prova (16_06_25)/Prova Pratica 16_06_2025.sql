CREATE DATABASE LojaY;

USE LojaY;

CREATE TABLE representante (
    id_representante INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    cnpj BIGINT UNIQUE
);

CREATE TABLE produto (
    id_produto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    codigo VARCHAR(50),
    estoque INT
);

CREATE TABLE compra (
    id_compra INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    data_horario DATETIME,
    quantidade INT,
    produto_id INT,
    representante_id INT,
    FOREIGN KEY (produto_id) 
    REFERENCES produto(id_produto),
    FOREIGN KEY (representante_id) 
    REFERENCES representante(id_representante)
);

INSERT INTO representante (nome, cnpj) VALUES
('Maria', 12345678000100),
('João', 98765432000100),
('Ana', 11223344000100);

INSERT INTO produto (nome, codigo, estoque) VALUES
('Teclado', 'TK001', 50),
('Mouse', 'MS001', 80),
('Monitor', 'MN001', 20),
('Notebook', 'NB001', 10),
('Headset', 'HS001', 30);

-- 02
SELECT MAX(estoque) AS estoque_maximo FROM produto;
SELECT MIN(estoque) AS estoque_minimo FROM produto;

 -- 04 
CREATE VIEW view_media_compra AS
SELECT produto_id, AVG(quantidade) AS media_quantidade
FROM compra
GROUP BY produto_id;

-- 05 
SELECT DISTINCT nome FROM representante; 
SELECT nome FROM representante GROUP BY nome;

-- 03
DELIMITER $$
CREATE PROCEDURE RealizarCompra(
    IN p_representante_id INT,
    IN p_produto_id INT,
    IN p_quantidade INT
)
BEGIN
    IF (SELECT estoque FROM produto WHERE id_produto = p_produto_id) >= p_quantidade THEN
        INSERT INTO compra (data_horario, quantidade, produto_id, representante_id)
        VALUES (NOW(), p_quantidade, p_produto_id, p_representante_id);

        UPDATE produto
        SET estoque = estoque - p_quantidade
        WHERE id_produto = p_produto_id;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Estoque insuficiente para realizar a compra.';
    END IF;
END$$
DELIMITER ;

CALL RealizarCompra(1, 1, 5);
CALL RealizarCompra(1, 2, 10);

CALL RealizarCompra(2, 3, 2); 
CALL RealizarCompra(2, 4, 1);

CALL RealizarCompra(3, 5, 5); 
CALL RealizarCompra(3, 1, 3);


