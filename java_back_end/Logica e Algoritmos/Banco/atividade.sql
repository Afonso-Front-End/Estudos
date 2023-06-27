CREATE Table alunos(
    nome VARCHAR(30),
    idade INTEGER,
    nota1 DOUBLE,
    nota2 DOUBLE
);
INSERT INTO alunos(nome,idade,nota1,nota2)VALUES
('Ana',15,7.5,8.2),
('Lucas',NULL,9,8.6),
('Vanessa',16,6.6,7.1),
('Leonardo',15,5,4.5),
('Dênis',17,10,10);
SELECT * FROM alunos;
SELECT nome, idade, nota1, nota2 FROM alunos;
SELECT nome ,(nota1+nota2)/2 FROM alunos;
SELECT 
    nome,
    IF((nota1+nota2)/2 >=7, 'Aprovado', 'Reprovado') 
FROM alunos;
SELECT * FROM alunos WHERE idade IS NULL;
SELECT nome,  (nota1+nota2)/2 FROM alunos WHERE  idade < 16;
SELECT * FROM alunos ORDER BY nome DESC;
SELECT * FROM alunos ORDER BY nome;
SELECT nome FROM alunos WHERE nome LIKE '%L%';
SELECT nome FROM alunos WHERE nome LIKE 'A%';
SELECT nome FROM alunos WHERE nome LIKE '%A';
SELECT COUNT(*) FROM alunos;
SELECT SUM( idade) FROM alunos;
SELECT  MAX(idade) FROM alunos;
SELECT MIN(idade) FROM alunos;
UPDATE alunos SET idade = 15 WHERE idade IS NULL;
SELECT * FROM alunos;
DELETE FROM alunos WHERE idade > 15;
SELECT * FROM alunos;
DROP TABLE alunos;
SELECT * FROM alunos;




