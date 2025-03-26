CREATE DATABASE biblioteca2;

USE biblioteca2;

CREATE TABLE editora(
id_editora INT NOT NULL AUTO_INCREMENT,
nome_fantasia_editora ENUM ('Editora A','Editora B', 'Editora C'),
razao_social_editora VARCHAR(100) NOT NULL,
pais_editora VARCHAR(100) DEFAULT 'Brasil',
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
nome_autor VARCHAR(100) NOT NULL,
rg_autor INT,
PRIMARY KEY (id_autor)
);

CREATE TABLE financiador(
id_financiador INT NOT NULL AUTO_INCREMENT,
nome_financiador VARCHAR (50) DEFAULT 'Financiador Publico',
cnpj_financiador BIGINT,
PRIMARY KEY (id_financiador)
);

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT,
nome_cliente VARCHAR(100) NOT NULL,
rg_cliente INT,
cpf_cliente BIGINT UNIQUE,
pais_cliente VARCHAR(100) DEFAULT 'Brasil',
estado_cliente VARCHAR(100),
cidade_cliente VARCHAR(100),
bairro_cliente VARCHAR(100),
cep_cliente INT,
rua_cliente VARCHAR(100),
PRIMARY KEY (id_cliente)
);

CREATE TABLE pedido(
id_pedido INT NOT NULL AUTO_INCREMENT,
qtd_pedido INT,
cliente_id INT,
CHECK (qtd_pedido > 0),
PRIMARY KEY (id_pedido),
FOREIGN KEY (cliente_id)
REFERENCES cliente (id_cliente)
);

CREATE TABLE livro(
id_livro INT NOT NULL AUTO_INCREMENT,
isbn_livro BIGINT,
titulo_livro VARCHAR(100),
preco_livro DECIMAL(8,2),
CHECK (preco_livro > 0),
categoria_livro ENUM ('Horror','Ficção', 'Romance', 'Ação'),
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
('Editora A', 'Editora A LTDA', 'Brasil', 'São Paulo', 'São Paulo', 'Centro', 12345678, 'Rua São Paulo', '100'),
('Editora B', 'Editora B SA', 'Canada', 'Ontário', 'Toronto', 'Downtown', 23456789, 'Queen St W', '200'),
('Editora C', 'Editora C Ltda', 'Escócia', 'Edimburgo', 'Edimburgo', 'Old Town', 34567890, 'Royal Mile', '300'),
('Editora A', 'Editora A LTDA', 'Argentina', 'Buenos Aires', 'Buenos Aires', 'Microcentro', 45678901, 'Calle Florida', '400'),
('Editora B', 'Editora B SA', 'Marrocos', 'Casablanca-Settat', 'Casablanca', 'Centre Ville', 56789012, 'Avenue Hassan II', '500');

-- FORÇANDO ERRO NOT NULL
-- INSERT INTO editora 
-- (nome_fantasia_editora, razao_social_editora, estado_editora, cidade_editora, bairro_editora, cep_editora, rua_editora, numero_editora) 
-- VALUES 
-- ('Editora A', 'Editora A LTDA', 'São Paulo', 'São Paulo', 'Centro', 12345678, 'Rua Liberdade', '1010');

-- FORÇANDO ERRO DEFAULT
-- INSERT INTO editora 
-- (nome_fantasia_editora, razao_social_editora, estado_editora, cidade_editora, bairro_editora, cep_editora, rua_editora, numero_editora) 
-- VALUES 
-- ('Editora D', 'Editora A LTDA', 'São Paulo', 'São Paulo', 'Centro', 12345678, 'Rua Liberdade', '1010');

INSERT INTO autor 
(nome_autor, rg_autor)
VALUES 
('José da Silva', 123456789),
('Maria Oliveira', 234567890),
('Carlos Pereira', 345678901),
('Fernanda Santos', 456789012),
('Lucas Costa', 567890123);

INSERT INTO financiador 
(nome_financiador, cnpj_financiador)
VALUES
('Financiador A', 12345678000199),
('Financiador B', 23456789000188),
('Financiador C', 34567890000177),
('Financiador D', 45678901000166),
('Financiador E', 56789012000155);

INSERT INTO cliente 
(nome_cliente, rg_cliente, cpf_cliente, pais_cliente, estado_cliente, cidade_cliente, bairro_cliente, cep_cliente, rua_cliente)
VALUES
('Ana Souza', 123456789, 12345678901, 'Brasil', 'São Paulo', 'São Paulo', 'Paulista', 10010010, 'Rua Brasil'),
('Roberto Lima', 234567890, 23456789012, 'Brasil', 'Rio de Janeiro', 'Niterói', 'Icaraí', 20020020, 'Rua das Palmeiras'),
('Luana Mendes', 345678901, 34567890123, 'Brasil', 'Minas Gerais', 'Belo Horizonte', 'Savassi', 30030030, 'Avenida das Nações'),
('Gabriel Santos', 456789012, 45678901234, 'Brasil', 'Bahia', 'Salvador', 'Barra', 40040040, 'Rua do Sol'),
('Patrícia Costa', 567890123, 56789012345, 'Brasil', 'Paraná', 'Curitiba', 'Centro', 50050050, 'Avenida das Nações');

-- Forçando erro UNIQUE
-- INSERT INTO cliente 
-- (nome_cliente, rg_cliente, cpf_cliente, pais_cliente, estado_cliente, cidade_cliente, bairro_cliente, cep_cliente, rua_cliente)
-- VALUES
-- ('Ana Maria', 123456789, 12345678901, 'Brasil', 'São Paulo', 'São Paulo', 'Paulista', 10010010, 'Rua Brasil');


INSERT INTO livro 
(isbn_livro, titulo_livro, preco_livro, categoria_livro, editora_id, autor_id, financiador_id)
VALUES
(1234567890123, 'O Mistério da Noite', 29.90, 'Horror', 1, 1, 1),
(2345678901234, 'A Jornada do Herói', 39.90, 'Ficção', 2, 2, 2),
(3456789012345, 'Amor à Primeira Vista', 19.90, 'Romance', 3, 3, 3),
(4567890123456, 'Aventura no Espaço', 49.90, 'Ação', 4, 4, 4),
(5678901234567, 'O Código do Labirinto', 59.90, 'Ação', 5, 5, 5);

-- FORÇANDO ERRO CHECK
-- INSERT INTO livro 
-- (isbn_livro, titulo_livro, preco_livro, categoria_livro, editora_id, autor_id, financiador_id)
-- VALUES
-- (1234567890123, 'O Mistério da Noite', -2,5, 'Horror', 1, 1, 1);

INSERT INTO pedido 
(qtd_pedido, cliente_id, livro_id)
VALUES 
(3, 1, 2),
(2, 2, 3),
(5, 3, 1),
(1, 4, 5),
(10, 5, 4);





