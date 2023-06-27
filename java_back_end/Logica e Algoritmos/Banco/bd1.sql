-- Criar tabela
CREATE TABLE clientes(
    nome VARCHAR(30),
    idade INTEGER,
    email VARCHAR(50)
);

-- Listar todas as bases de dados
SHOW DATABASES;

-- Exibir estrutura da tabela
DESCRIBE clientes;

-- Renomear tabela
ALTER TABLE clientes RENAME TO usuarios;

-- Adicionar nova coluna
ALTER TABLE usuarios ADD COLUMN cidade VARCHAR(30);

-- Remover coluna
ALTER TABLE usuarios DROP COLUMN cidade;

-- Inserir dados
INSERT INTO usuarios VALUES ("Jean", 22, "jean.silva@yahoo.com");
INSERT INTO usuarios (nome, email) VALUES ("Rebeca", "rebeca.souza@gmail.com");
INSERT INTO usuarios VALUES
("Ana", 16, "ana_paula@gmail.com"),
("Rubens", 24, "rubens.paiva@yahoo.com"),
("Francielle", 34, "franci.bnu@gmail.com"),
("Bianca", 43, "bianca_aguiar@gmail.com"),
("Paulo", 21, "paulo.souza@yahoo.com");

-- Selecionar dados
SELECT * FROM usuarios; -- Selecionar todos os registros
SELECT nome, idade FROM usuarios; -- Selecionar todos os registros e exibir nome e idade
SELECT COUNT(*) FROM usuarios; -- Contar registros
SELECT MAX(idade) FROM usuarios; -- Obtêm o maior valor da coluna
SELECT MIN(idade) FROM usuarios; -- Obtêm o menor valor da coluna
SELECT AVG(idade) FROM usuarios; -- Obtêm a média de uma determinada coluna
SELECT 
    idade,
    IF(idade>=18, "Maior de idade", "Menor de idade") 
FROM usuarios; -- Exibir a idade e retornar uma mensagem
SELECT * FROM usuarios WHERE idade >= 18; -- Filtrar dados
SELECT * FROM usuarios WHERE idade IS NULL; -- Filtrar registros onde a coluna seja nula
SELECT * FROM usuarios WHERE idade IS NOT NULL; -- Filtrar registros onde a coluna não seja nula
SELECT * FROM usuarios ORDER BY nome; -- Ordenar em ordem alfbética (A-Z) ou crescente
SELECT * FROM usuarios ORDER BY nome DESC; -- Ordenar em ordem alfbética (Z-A) ou decrescente
SELECT nome FROM usuarios WHERE nome LIKE "f%"; -- Inicia com F
SELECT nome FROM usuarios WHERE nome LIKE "%a"; -- Finaliza com A
SELECT nome FROM usuarios WHERE nome LIKE "%e%"; -- Contêm o termo E
SELECT * FROM usuarios WHERE email LIKE "%gmail.com" AND idade >= 18; -- Exibir registros que terminam com o termo gmail.com e com idade maior ou igual a 18

-- Alterar dados
UPDATE usuarios SET idade = 27 WHERE idade IS NULL; -- Alterar a idade para 27 do usuário com idade nula

-- Remover dados
DELETE FROM usuarios WHERE idade < 18;

-- Remover tabela
DROP TABLE usuarios;

-- Remover base de dados
DROP DATABASE bd1;