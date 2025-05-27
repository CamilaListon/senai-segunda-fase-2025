CREATE DATABASE cadastro_estudantes;

USE cadastro_estudantes;

CREATE TABLE dados_estudantes(
id_estudante INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
matricula VARCHAR(45),
PRIMARY KEY(id_estudante)
);

INSERT INTO dados_estudantes
(nome, matricula)
VALUES
('Maria Antonia', '20258596'),
('Ana Carolina', '20254758');

SELECT * FROM dados_estudantes; 

