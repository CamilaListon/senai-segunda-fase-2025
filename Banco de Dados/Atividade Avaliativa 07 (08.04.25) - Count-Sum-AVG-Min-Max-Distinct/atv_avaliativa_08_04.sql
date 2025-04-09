CREATE DATABASE atv_avaliativa_08_04;

USE atv_avaliativa_08_04;

CREATE TABLE aluno(
id_aluno INT NOT NULL AUTO_INCREMENT,
nome_aluno VARCHAR(100),
PRIMARY KEY (id_aluno)
);

CREATE TABLE curso(
id_curso INT NOT NULL AUTO_INCREMENT,
nome_curso VARCHAR(100),
duracao_curso INT,
PRIMARY KEY (id_curso)
);

CREATE TABLE inscricao(
id_inscricao INT NOT NULL AUTO_INCREMENT,
data_inscricao DATE,
aluno_id INT,
curso_id INT,
PRIMARY KEY (id_inscricao),
FOREIGN KEY (aluno_id)
REFERENCES aluno (id_aluno),
FOREIGN KEY (curso_id)
REFERENCES curso (id_curso)
);

CREATE TABLE mensalidade(
id_mensalidade INT NOT NULL AUTO_INCREMENT,
data_vencimento DATE,
valor_mensalidade DECIMAL (8,2),
status_pagamento ENUM ('PAGO', 'NÃO PAGO'),
inscricao_id INT,
PRIMARY KEY (id_mensalidade),
FOREIGN KEY (inscricao_id)
REFERENCES inscricao (id_inscricao)
);

INSERT INTO aluno
(nome_aluno)
VALUES
('Eduarda'),
('Carla'),
('Pedro'),
('Carlos'),
('Alberto');

INSERT INTO curso
(nome_curso, duracao_curso)
VALUES
('Geografia', 8),
('Direito', 10),
('Agronomia', 8),
('Pedagogia', 8),
('Desenvolvimento de Sistemas', 10);

INSERT INTO inscricao
(data_inscricao, aluno_id, curso_id)
VALUES
('2020-01-02', 4, 4),
('2020-01-02', 3, 3),
('2020-01-02', 2, 2),
('2020-06-02', 4, 4),
('2020-06-02', 3, 3),
('2020-06-02', 2, 2);

INSERT INTO inscricao
(data_inscricao)
VALUES
('2020-06-02');

INSERT INTO mensalidade
(data_vencimento, valor_mensalidade, status_pagamento, inscricao_id)
VALUES
('2020-01-10', 550, 'Pago', 1),
('2020-01-10', 540, 'Pago', 2),
('2020-01-10', 530, 'Pago', 3),
('2020-06-10', 580, 'Não Pago', 4),
('2020-06-10', 570, 'Não Pago', 5),
('2020-06-10', 560, 'Não Pago', 6);

SELECT aluno.nome_aluno, SUM(mensalidade.valor_mensalidade) FROM mensalidade
JOIN aluno
ON aluno.id_aluno = mensalidade.inscricao_id
GROUP BY nome_aluno;

SELECT aluno.nome_aluno, AVG(mensalidade.valor_mensalidade) FROM mensalidade
JOIN aluno
ON aluno.id_aluno = mensalidade.inscricao_id
GROUP BY nome_aluno;

SELECT aluno.nome_aluno, MAX(mensalidade.valor_mensalidade) FROM mensalidade
JOIN aluno
ON aluno.id_aluno = mensalidade.inscricao_id
GROUP BY nome_aluno;

SELECT aluno.nome_aluno, MIN(mensalidade.valor_mensalidade) FROM mensalidade
JOIN aluno
ON aluno.id_aluno = mensalidade.inscricao_id
GROUP BY nome_aluno;

SELECT aluno.nome_aluno FROM mensalidade
JOIN aluno
ON aluno.id_aluno = mensalidade.inscricao_id
GROUP BY nome_aluno;

SELECT DISTINCT aluno.nome_aluno FROM mensalidade
JOIN aluno
ON aluno.id_aluno = mensalidade.inscricao_id;

SELECT aluno.nome_aluno, SUM(mensalidade.valor_mensalidade) FROM mensalidade
JOIN aluno
ON aluno.id_aluno = mensalidade.inscricao_id
WHERE mensalidade.status_pagamento = 'Não Pago'
GROUP BY nome_aluno;

SELECT SUM(valor_mensalidade)
FROM mensalidade
WHERE id_mensalidade BETWEEN 2 AND 5;

SELECT SUM(valor_mensalidade) 
FROM mensalidade
WHERE data_vencimento < '2020-06-10';

SELECT SUM(valor_mensalidade) 
FROM mensalidade
WHERE data_vencimento > '2020-06-09'; 


