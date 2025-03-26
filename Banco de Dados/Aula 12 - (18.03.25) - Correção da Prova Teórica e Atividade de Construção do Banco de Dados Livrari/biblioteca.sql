CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE editora(
id_editora INT NOT NULL AUTO_INCREMENT,
nome_fantasia_editora VARCHAR(100),
razao_social_editora VARCHAR(100),
pais_editora VARCHAR(100),
estado_editora VARCHAR(100),
cidade_editora VARCHAR(100),
bairro_editora VARCHAR(100),
cep_editora INT,
rua_editora VARCHAR(100),
numero_editora VARCHAR(100),
PRIMARY KEY (id_editora)
);

CREATE TABLE autor(
id_autor INT NOT NULL AUTO_INCREMENT,
nome_autor VARCHAR(100),
rg_autor INT,
PRIMARY KEY (id_autor)
);

CREATE TABLE financiador(
id_financiador INT NOT NULL AUTO_INCREMENT,
nome_financiador VARCHAR(100),
cnpj_financiador BIGINT,
PRIMARY KEY (id_financiador)
);

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT,
nome_cliente VARCHAR(100),
rg_cliente INT,
cpf_cliente BIGINT,
PRIMARY KEY (id_cliente)
);

CREATE TABLE pedido(
id_pedido INT NOT NULL AUTO_INCREMENT,
qtd_pedido INT,
cliente_id INT,
PRIMARY KEY (id_pedido),
FOREIGN KEY (cliente_id)
REFERENCES cliente (id_cliente)
);

CREATE TABLE livro(
id_livro INT NOT NULL AUTO_INCREMENT,
isbn_livro BIGINT,
titulo_livro VARCHAR(100),
preco_livro DECIMAL(8,2),
categoria_livro VARCHAR(100),
editora_id INT,
autor_id INT,
financiador_id INT,
PRIMARY KEY (id_livro),
FOREIGN KEY (editora_id)
REFERENCES editora (id_editora),
FOREIGN KEY (autor_id)
REFERENCES autor (id_autor),
FOREIGN KEY (financiador_id)
REFERENCES financiador (id_financiador)
);

ALTER TABLE pedido
ADD COLUMN livro_id INT,
ADD FOREIGN KEY (livro_id)
REFERENCES livro (id_livro);

INSERT INTO editora 
(nome_fantasia_editora, razao_social_editora, pais_editora, estado_editora, cidade_editora, bairro_editora, cep_editora, rua_editora, numero_editora)
VALUES
('Editora Nova Era', 'Nova Era Editora Ltda.', 'Brasil', 'São Paulo', 'São Paulo', 'Jardim Paulista', 12345678, 'Rua da Paz', '123'),
('Editora Mundo Livre', 'Mundo Livre Publicações', 'Brasil', 'Rio de Janeiro', 'Rio de Janeiro', 'Copacabana', 23456789, 'Avenida Atlântica', '456'),
('Editora Alfa', 'Alfa Editora S/A', 'Brasil', 'Minas Gerais', 'Belo Horizonte', 'Savassi', 34567890, 'Rua Rio de Janeiro', '789'),
('Editora Soluções', 'Soluções Editorais Ltda.', 'Brasil', 'Bahia', 'Salvador', 'Barra', 45678901, 'Rua do Sol', '1011'),
('Editora Horizonte', 'Horizonte Publicações', 'Brasil', 'São Paulo', 'Campinas', 'Centro', 56789012, 'Rua dos Trabalhadores', '1213');

INSERT INTO autor 
(nome_autor, rg_autor)
VALUES
('João Silva', 123456789),
('Maria Oliveira', 987654321),
('Carlos Souza', 135792468),
('Fernanda Pereira', 246813579),
('Luiz Martins', 864209753);

INSERT INTO financiador 
(nome_financiador, cnpj_financiador)
VALUES
('Fundação Cultural', 12345678000195),
('Banco do Livro', 98765432000198),
('Investidores Literários', 13579246000150),
('Patrocínio Editorial', 24681357000120),
('Instituto do Conhecimento', 86420975000110);

INSERT INTO cliente 
(nome_cliente, rg_cliente, cpf_cliente)
VALUES
('Ana Souza', 111223344, 12345678901),
('Roberto Silva', 223344556, 98765432100),
('Lucas Oliveira', 334455667, 13579246801),
('Juliana Costa', 445566778, 24681357902),
('Fernanda Lima', 556677889, 86420975304);

INSERT INTO livro 
(isbn_livro, titulo_livro, preco_livro, categoria_livro, editora_id, autor_id, financiador_id)
VALUES
(9781234567890, 'O Mistério do Tempo', 29.90, 'Ficção', 1, 1, 1),
(9782345678901, 'Caminhos do Destino', 39.90, 'Romance', 2, 2, 2),
(9783456789012, 'A Jornada do Herói', 49.90, 'Aventura', 3, 3, 3),
(9784567890123, 'Segredos do Universo', 59.90, 'Ciência', 4, 4, 4),
(9785678901234, 'Reflexões Filosóficas', 69.90, 'Filosofia', 5, 5, 5);

INSERT INTO pedido 
(qtd_pedido, cliente_id, livro_id)
VALUES
(3, 1, 1),
(2, 2, 3),
(5, 3, 5),
(1, 4, 2),
(4, 5, 4);

SELECT * FROM editora;

SELECT * FROM autor;

SELECT * FROM financiador;

SELECT * FROM cliente;

SELECT * FROM livro;

SELECT * FROM pedido;

DELETE FROM editora
WHERE id_editora = 4;

DELETE FROM financiador
WHERE id_financiador = 1;

DELETE FROM autor
WHERE id_autor = 2;

DELETE FROM livro
WHERE id_livro = 5;

DELETE FROM cliente
WHERE id_cliente = 3;