CREATE DATABASE aula_19_05;

USE aula_19_05;

CREATE TABLE estudante (
id_estudante INT NOT NULL AUTO_INCREMENT,
nome_estudante VARCHAR(100),
matricula_estudante INT,
curso VARCHAR(50),
cidade VARCHAR(100),
PRIMARY KEY(id_estudante)
);

INSERT INTO estudante 
(nome_estudante, matricula_estudante, curso, cidade) 
VALUES
('Ana Paula Souza', 2023001, 'Engenharia Civil', 'São Paulo'),
('Bruno Henrique Lima', 2023002, 'Direito', 'Belo Horizonte'),
('Carla Mendes Oliveira', 2023003, 'Medicina', 'Rio de Janeiro'),
('Daniel Ferreira Costa', 2023004, 'Administração', 'Curitiba'),
('Eduarda Ribeiro Martins', 2023005, 'Ciência da Computação', 'Fortaleza');

DELIMITER $$
CREATE PROCEDURE AtualizarEstudante(
    IN p_id_estudante INT,
    IN p_nome_estudante VARCHAR(100),
    IN p_matricula_estudante INT,
    IN p_curso VARCHAR(50),
    IN p_cidade VARCHAR(100)
)
BEGIN
    UPDATE estudante
    SET nome_estudante = p_nome_estudante,
        matricula_estudante = p_matricula_estudante,
        curso = p_curso,
        cidade = p_cidade
    WHERE id_estudante = p_id_estudante;

    SELECT * FROM estudante;
END$$
DELIMITER ;

CALL AtualizarEstudante(3, 'Carla Oliveira Santos', 2023303, 'Biomedicina', 'Niterói');

DELIMITER $$
CREATE PROCEDURE DeletarEstudante(
    IN p_id_estudante INT
)
BEGIN
    DELETE FROM estudante
    WHERE id_estudante = p_id_estudante;

    SELECT * FROM estudante;
END$$
DELIMITER ;

CALL DeletarEstudante(2);


DELIMITER $$
CREATE PROCEDURE ContarEstudantesPorCurso()
BEGIN
    SELECT curso, COUNT(*) AS quantidade_estudantes
    FROM estudante
    GROUP BY curso
    ORDER BY quantidade_estudantes DESC;
END$$
DELIMITER ;

CALL ContarEstudantesPorCurso();