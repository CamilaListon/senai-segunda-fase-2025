CREATE DATABASE prova_14_04;

USE prova_14_04;

CREATE TABLE aluno(
id_aluno INT NOT NULL AUTO_INCREMENT,
nome_aluno VARCHAR (100),
email_aluno VARCHAR (100),
cpf_aluno BIGINT,
PRIMARY KEY (id_aluno)
);

SELECT * FROM mensalidade;

CREATE TABLE disciplina(
id_disciplina INT NOT NULL AUTO_INCREMENT,
nome_disciplina VARCHAR(45),
carga_horaria_disciplina INT,
PRIMARY KEY (id_disciplina)
);

CREATE TABLE turma(
id_turma INT NOT NULL AUTO_INCREMENT,
turno_turma ENUM('Matutino', 'Vespertino', 'Noturno'),
disciplina_id INT,
PRIMARY KEY (id_turma),
FOREIGN KEY (disciplina_id)
REFERENCES disciplina (id_disciplina)
);

CREATE TABLE inscricao(
id_inscricao INT NOT NULL AUTO_INCREMENT,
dt_inscricao DATE,
aluno_id INT,
turma_id INT,
PRIMARY KEY (id_inscricao),
FOREIGN KEY (aluno_id)
REFERENCES aluno (id_aluno),
FOREIGN KEY (turma_id)
REFERENCES turma (id_turma)
);

CREATE TABLE mensalidade(
id_mensalidade INT NOT NULL AUTO_INCREMENT,
dt_vencimento_mensalidade DATE,
valor_mensalidade DECIMAL(8,2),
status_pagamento ENUM('Fatura Paga', 'Em Débito'),
inscricao_id INT,
PRIMARY KEY (id_mensalidade),
FOREIGN KEY (inscricao_id)
REFERENCES inscricao (id_inscricao)
);

INSERT INTO aluno
(nome_aluno, email_aluno, cpf_aluno)
VALUES
('Joao Silva', 'joao_silva@hotmail.com', '12345678900'),
('Maria Oliveira', 'maria_oliveira@hotmail.com', '23456789011'),
('Camila Liston', 'camila_liston@estudante.sesisenai.org.br', '07257216932'),
('Pedro Santos', 'pedro_santos@hotmail.com', '34567890122'),
('Beatriz Martins', 'beatriz_martis@hotmail.com', '67890123455');

INSERT INTO disciplina
(nome_disciplina, carga_horaria_disciplina)
VALUES
('Geografia', 8),
('Tecnologia da Informação', 8),
('Medicina', 10),
('Odontologia', 8),
('Letras Libras', 8);

INSERT INTO turma
(turno_turma, disciplina_id)
VALUES
('Matutino', 1),
('Vespertino', 2),
('Noturno', 3),
('Vespertino', 4),
('Matutino', 5);

INSERT INTO inscricao
(dt_inscricao, aluno_id, turma_id)
VALUES
('24-01-01', 4, 1),
('24-01-01', 3, 2),
('24-01-01', 2, 3),
('24-06-01', 4, 1),
('24-06-01', 3, 2),
('24-06-01', 2, 3);

INSERT INTO inscricao
(dt_inscricao)
VALUES
('24-06-01');

INSERT INTO mensalidade
(dt_vencimento_mensalidade, valor_mensalidade, status_pagamento, inscricao_id)
VALUES
('2024-01-05', 600, 'Fatura Paga', 1),
('2024-01-05', 600, 'Fatura Paga', 2),
('2024-01-05', 600, 'Fatura Paga', 3),
('2024-06-05', 700, 'Em Débito', 4),
('2024-06-05', 700, 'Em Débito', 5),
('2024-06-05', 700, 'Em Débito', 6);

SELECT aluno.nome_aluno, mensalidade.valor_mensalidade
FROM mensalidade
JOIN inscricao ON mensalidade.inscricao_id = inscricao.id_inscricao
JOIN aluno ON inscricao.aluno_id = aluno.id_aluno
WHERE mensalidade.status_pagamento = 'Em Débito';

SELECT inscricao.id_inscricao, mensalidade.dt_vencimento_mensalidade , mensalidade.valor_mensalidade
FROM inscricao
JOIN mensalidade
ON mensalidade.inscricao_id = inscricao.id_inscricao;

SELECT * FROM inscricao
LEFT JOIN aluno
ON inscricao.aluno_id = aluno.id_aluno;

SELECT * FROM inscricao
RIGHT JOIN turma
ON inscricao.turma_id = turma.id_turma;

SELECT * FROM inscricao
JOIN aluno
ON inscricao.aluno_id  = aluno.id_aluno
JOIN turma
ON inscricao.turma_id = turma.id_turma;

SELECT * FROM inscricao
LEFT JOIN aluno
ON inscricao.aluno_id  = aluno.id_aluno
UNION
SELECT * FROM inscricao
RIGHT JOIN aluno
ON inscricao.aluno_id  = aluno.id_aluno;

SELECT inscricao.id_inscricao AS id_inscricao, aluno.nome_aluno AS 'nome do aluno', aluno.email_aluno AS 'email do aluno'
FROM inscricao
JOIN aluno
ON inscricao.aluno_id  = aluno.id_aluno;

CREATE VIEW vw_inscricao_aluno AS
SELECT inscricao.id_inscricao AS id_inscricao, aluno.nome_aluno AS 'nome do aluno', aluno.email_aluno AS 'email do aluno' FROM inscricao
JOIN aluno
ON inscricao.aluno_id  = aluno.id_aluno;