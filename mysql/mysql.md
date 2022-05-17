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



