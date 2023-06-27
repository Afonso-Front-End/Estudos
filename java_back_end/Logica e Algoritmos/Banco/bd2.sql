CREATE Table marcas(
    codigo INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (30)
);

INSERT INTO marcas(nome)VALUES
('Sansung'),
('Apple'),
('Motorola');
SELECT * FROM marcas;
CREATE TABLE produtos(
    codigo INT AUTO_INCREMENT KEY,
    produto VARCHAR(30),
    valor DOUBLE,
    codigoMarca INT,
    FOREIGN KEY(codigoMarca) REFERENCES marcas(codigo)
);
SELECT * FROM produtos;

INSERT INTO produtos VALUES
(NULL,'Glaxy S21', 8000,1),
(NULL,'iphone 12', 4500,2),
(NULL,'Galxy Note', 4000,1),
(NULL,'iphone 8', 3500,2);

SELECT * FROM produtos;

SELECT 
    produtos.produto,
    produtos.valor,
    marcas.nome
FROM produtos
INNER JOIN marcas
ON produtos.codigoMarca = marcas.codigo;

TRUNCATE TABLE produtos;
SELECT * FROM produtos
WHERE valor >= (SELECT AVG(valor) FROM produtos);
(SELECT AVG(valor) FROM produtos);





--primary key ou chave-primária: garante que nao existirá informações repetidas.

--foreing key ou chave-estrangeira: cria vínculo com outra tabela



