SELECT * FROM mysql.user;

CREATE USER 'professor'@'localhost' IDENTIFIED BY '123'; 

-- Comando grant da permissão
GRANT SELECT ON *.* TO 'professor'@'localhost';

 -- Como ver especificamente as liberações de um usuario
SHOW GRANTS FOR 'estagiario'@'localhost';

 -- Como deletar o usuario
DROP USER 'professor'@'localhost';

 --
CREATE USER 'estagiario'@'localhost' IDENTIFIED BY '123'; 

GRANT SELECT ON atv_posto.* TO 'estagiario'@'localhost';

GRANT INSERT ON atv_posto.* TO 'estagiario'@'localhost';

SHOW GRANTS FOR 'estagiario'@'localhost';

 -- Remover apenas determinada permissão
 REVOKE INSERT ON atv_posto.* FROM 'estagiario'@'localhost';
 
  -- Liberando mais de uma permissão
 GRANT SELECT, INSERT ON aula_05_05.* TO 'estagiario'@'localhost';

-- Permissão a tabela especifica
GRANT SELECT ON aula_28_04.pedido TO 'estagiario'@'localhost';