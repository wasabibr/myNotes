# MySQL

_Uma visão geral sobre o MySQL_



## Para que serve um banco de dados?



> Bancos de dados têm diversas funcionalidades, sendo comumente usados em sistemas de software.

* Sistemas bancários possuem bases de dados para armazenar suas informações.
* O Facebook possui um base de dados para armazenar usuários e os relacionamentos entre eles.
* A Udemy possui uma base de dados para armazenar algunos.



## Características de um banco de dados



> Bancos de dados devem executar procedimentos chamados de transações. A integridade de uma transação deve ser regida por quatro propriedades:

- **Atomicidade**

  - Todas as ações devem ser concluídas com sucesso, ou o processo falha como um todo e toda a ação é desfeita (rollback). Se há sucesso em todas as ações a informação é mantida no banco (commit);

    

- **Consistência**

  - Deve-se obedecer regras e restrições definidas em um banco, como por exemplo uso de chaves estrangeiras ou uso de campos únicos;

    

- **Isolamento**

  - Cada transação deve ser independente de outras transações;

    

- **Durabilidade**

  - Os resultados de uma transação devem ser permanentes, exceto se outra transação a desfizer.

  

## Tipos de campos



| Atributo       | Tipo                                                         |
| :------------- | :----------------------------------------------------------- |
| char           | Caracteres (string) de tamanho fixo                          |
| varchar        | Caracteres (string) de tamanho variável                      |
| int            | Números inteiros                                             |
| float. double  | Números fracionários (ponto flutuante)                       |
| date           | Data no formato do mysql (ano-mes-dia)                       |
| not null       | Indica que o atributo nao pode ser nulo (deve possuir um valor) |
| auto_increment | Indica que o valor do campo será incrementado automaticamente |
| primary key    | Indica que o atributo é uma chave primária (indentificador único) |
| foreign key    | Indica que o atributo é uma chave estrangeira (chave primária de outra tabela) |
| text           | Armezena texto (não deve ser do tipo not null)               |



## Linguagem SQL



> **SQL** ***(Structured Query Language)\*** quer dizer Linguagem de Consulta Estruturada. Permite a manipulação de tabelas do banco de dados.

Ela é a linguagem de busca de informações em bancos de dados relacionais. A linguagem SQL é dividida em:



#### **DML - Linguagem de Manipulação de Dados**

Permite manipulação de dados, como exclusão, inclusão e alterações. Exemplos de comandos:

- INSERT (permite adicionar dados)
- UPDATE (permite atualizar dados)
- DELETE (permite apagar dados)



#### **DDL - Linguagem de Definição de Dados**

Permite a criação e alteração de dados. Exemplos de comandos:

- CREATE TABLE (cria tabelas)
- ALTER TABLE (altera tabelas)
- DROP TABLE (apaga tabelas).



#### **DQL - Linguagem de Consulta de Dados**

Permite a realização de buscas nas tabelas dos bancos de dados. Exemplo de comando:

- SELECT (comando mais importante usado para realizar buscas)



Buscas podem ser melhoradas com cláusulas:

```
SELECT * FROM TABELA
```

Realiza uma busca por todos os dados `*` em uma tabela chamada TABELA. A clásula `FROM` indica a tabela.



Ainda há outras cláusulas:

- WHERE: indica as condições
- GROUP BY: realiza agrupamentos
- ORDER BY: ordena os dados



Ainda podemos combinar buscas com operadores lógicos.

- AND: avalia se duas condições são verdadeiras
- OR: avalia se uma condição é verdadeira
- NOT: negação



Operadores relacionais permitem fazer comparações nas consultas:

- < Menor
- \> Maior
- <= Menor ou igual
- \>= Maior ou igual
- = Igual
- <> Diferente



## Comando de criação



> **CREATE: CRIAR**

Na linguagem SQL, podemos utilizar o comando CREATE para criar tabelas e bases de dados. CREATE é um comando do tipo DDL (*Data Definition Language*; ou Linguagem de Definição de Dados). Veja os exemplos a seguir:



#### `CREATE DATABASE MINHA_DB`

(traduzido ao pé da letra seria "CRIAR BASE DE DADOS MINHA_DB")



#### `CREATE TABLE MINHA_TABELA`

(traduzido ao pé da letra seria "CRIAR TABELA MINHA_TABELA")



## O que é o PHPMyAdmin?

> **phpMyAdmin** é uma ferramenta de software livre escrita em PHP, destinada a lidar com a administração do MySQL através da web.

![Resultado de imagem para phpmyadmin](https://upload.wikimedia.org/wikipedia/commons/9/95/PhpMyAdmin_logo.png)

**Site oficial**: [https://www.phpmyadmin.net](https://www.phpmyadmin.net/)



## DROP versus DELETE



>**DROP**: do inglês derrubar, soltar, jogar
>
>**DELETE**: do inglês apagar, deletar



Na linguagem SQL, DROP é um comando do tipo DDL, ou seja, comando de definição de dados; enquanto, DELETE é um comando do tipo DML, ou seja, manipulação de dados.

- Use DROP para excluir tabelas e bases de dados;
- Use DELETE para deletar dados em tabelas.

Exemplo:

```
DROP TABLE ABCD;
DELETE FROM ALUNOS WHERE ID = 2
```



## Comando de inserção



> **INSERT: INSERIR**



Na linguagem SQL, podemos utilizar o comando INSERT para inserir dados em uma tabela. INSERT é um comando do tipo **DML** (*Data Manipulation Language* - Linguagem de Manipulação de Dados). Veja os exemplos a seguir:

```
INSERT INTO MINHA_TABELA (CAMPOS) VALUES("VALORES")
```

(traduzido ao pé da letra seria "INSERIR DENTRO DA MINHA TABELA (NOME DAS COLUNAS QUE QUER FAZER INSERÇÃO) OS VALORES ('COLOCAR VALORES ENTRE ASPAS OU APÓSTROFOS')").

\* Observe que números não precisam de aspas.

Exemplo

```
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Alice","alice@oliveira.com","2017-10-24")
```



## Comando de seleção



>**SELECT: SELECIONAR**



Na linguagem SQL, podemos utilizar o comando SELECT para ler dados de tabelas. SELECT é um comando do tipo DQL (Data Query Language - Linguagem de Consulta de dados). Veja os exemplos a seguir:

```
SELECT * FROM MINHA_TABELA
```


(traduzido ao pé da letra seria "SELECIONAR * DA MINHA_TABELA", onde asterisco representa "TUDO")

Você poderia especificar colunas que deseja fazer a seleção, alterando o *. Por exemplo:

```
SELECT NOME FROM ALUNOS
```

("SELECIONAR (coluna) NOME DA (tabela) ALUNOS")



## Comando de atualização



> #### **UPDATE: ATUALIZAR**



Na linguagem SQL, podemos utilizar o comando UPDATE para atualizar dados em uma tabela. UPDATE é um comando do tipo **DML** (*Data Manipulation Language* - Linguagem de Manipulação de Dados). Veja os exemplos a seguir:

```
UPDATE MINHA_TABELA SET CAMPO="NOVO VALOR" WHERE ID =1
```

(traduzido ao pé da letra seria "ATUALIZAR MINHA TABELA DEFINA O CAMPO = "NOVO VALOR" ONDE ID=1)

\* Neste exemplo, o ID representa qual linha será atualizada. No caso estamos atualizando a coluna chamada CAMPO na primeira linha.



## Inserção na tabela alunos_cursos



Preencher essa tabela usando este comando:

```
insert into alunos_cursos(id_curso, id_aluno) values (1,1)
```



## Revisão



> ***Structured Query Language\***, ou Linguagem de Consulta Estruturada ou **SQL**, é a linguagem de pesquisa declarativa padrão para banco de dados relacional



- Ela foi criada pela IBM na década de 70.



**Criando bases de dados**

- CREATE DATABASE NOME



**Criando tabelas**

- CREATE TABLE NOME(COLUNAS TIPO)



**Selecionando dados**

- SELECT * FROM TABELA



**Deletando dados de uma tabela**

- DELETE FROM TABELA



**Famosos sistemas de gerenciamento de banco de dados**

- MySQL
- SQL SERVER
- MARIA DB
- CASSANDRA
- MONGODB
- VOLDEMORT



## Exemplo de Base de Dados, com Banco

Os comandos serão apresentados na sequência.

```
// Criando a Base de Dados
CREATE DATABASE JEFFERSON;
```

```
// Crindo a tabela ALUNO
CREATE TABLE ALUNO(
    NOME VARCHAR(255),
    EMAIL VARCHAR(255),
    DATA_NASCIMENTO DATE,
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY
)
```

```
// Criando a tabela CURSO
CREATE TABLE CURSO(
    NOME VARCHAR(255),
    DURACAO VARCHAR(20),
    ID INT NOT NULL	AUTO_INCREMENT PRIMARY KEY
)
```

```
// Criando a tabela de relação ALUNO-CURSO
CREATE TABLE ALUNO_CURSO(
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ID_ALUNO INT NOT NULL,
    ID_CURSO INT NOT NULL
)
```

```
// Renomeando a tabela ALUNO para ALUNOS, CURSO para CURSOS
// e ALUNO_CURSO para ALUNOS_CURSOS
RENAME TABLE ALUNO TO ALUNOS;
RENAME TABLE CURSO TO CURSOS;
RENAME TABLE ALUNO_CURSO TO ALUNOS_CURSOS;
```

```
// Inserindo dados na tabela ALUNOS
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Alice","alice@oliveira.com","2017-10-24");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Monik","monike@oliveira.com","1986-05-02");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Jefferson","jefferson@oliveira.com","1978-02-10");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Malu","malu@oliveira.com","2014-05-02");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Beatriz","beatriz@oliveira.com","1985-05-02");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Maria Alice","maria@alice.com","20097-04-16");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Ana Paula","ana@paula.com","1995-11-03");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Erika","erika@monik.com","1986-05-02");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Rodrigo","rodrigo@leandro.com","2019-06-02");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Adam","adam@eternia.com","1981-12-01");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Teela","teela@eternia.com","1981-12-01");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Gorpo","gorpo@eternia.com","1981-12-01");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Evelyn","evelyn@eternia.com","1981-12-01");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Randor","randor@eternia.com","1981-12-01");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Marlene","marlene@eternia.com","1981-12-01");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Panthor","panthor@eternia.com","1981-12-01");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Pacato","pacatoa@eternia.com","1981-12-01");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Gato Guerreiro","g.guerreiro@eternia.com","1981-12-01");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Esqueleto","esqueleto@eternia.com","1981-12-01");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Homem Fera","h.fera@eternia.com","1981-12-01");
INSERT ALUNOS(NOME,EMAIL,DATA_NASCIMENTO) VALUES("Teelana","teelana@eternia.com","1981-12-01");
```

```
// Fazendo algumas buscas na tabela ALUNOS
SELECT * FROM ALUNOS;
SELECT NOME FROM ALUNOS;
SELECT * FROM ALUNOS WHERE NOME = "ALICE";
SELECT * FROM ALUNOS WHERE NOME LIKE "%ALICE%";
SELECT * FROM `ALUNOS` WHERE `DATA_NASCIMENTO` >= '1978.02.10'
SELECT * FROM ALUNOS ORDER BY NOME ASC;
SELECT NOME,DATA_NASCIMENTO FROM ALUNOS ORDER BY DATA_NASCIMENTO DESC;
SELECT * FROM ALUNOS WHERE EMAIL LIKE "%eternia%" AND NOME LIKE "%e%";
```

```
// Alterando campos da tabela Alunos
UPDATE ALUNOS SET NOME = "Anna Paula", EMAIL = "anna@paula.com" WHERE ID = 7;
```

```
// Inserindo dados no tabela CURSOS
INSERT CURSOS(NOME,DURACAO) VALUES("Curso de Matematica","1H");
```

```
//
INSERT INTO ALUNOS_CURSOS(ID_CURSO, ID_ALUNO) VALUES (1,1);
```

```
//
SELECT ALUNOS.NOME, CURSOS.NOME FROM ALUNOS, CURSOS, ALUNOS_CURSOS WHERE ALUNOS.ID = ALUNOS_CURSOS.ID_ALUNO AND CURSOS.ID = ALUNOS_CURSOS.ID_CURSO;
```

