# PHP
_Noções gerais_



## Nomeando



| Como nomear variáveis | Como NÃO nomear variáveis |
| --------------------- | ------------------------- |
| $altura               | $minha-variavel           |
| $variavel_correta$    | $1variavel                |
| minhaAVafFriAavel     | $var iavel                |
| $MINHAVARIAVEL        | $ variavel                |
| $Minha_Variavel       | $#!$variavel              |
| $variavel10           |                           |



## Tipos de variáveis mais usados



| Tipo            | Exemplo                    |
| --------------- | -------------------------- |
| int (inteiro)   | $inteiro = 10000;          |
| float (decimal) | $preco = 10.50;            |
| lista (array)   | $lista = ["a", "b" , 'c']; |
| booleano        | $eh_verdade = false;       |
| string          | $nome = "Alice Oliveira";  |



## Tipos de Comentários



```js
// comentário em uma linha

/*
comentário
varias
linhas
*/
```



## Exibindo variáveis



```js
echo $variavel;

var_dump($variavel);
```



## Constantes em PHP



> Seguem as mesmas regras de declaração das variáveis.
> Não precisam de $ no início.
> Declaradas através da função: define(“CONSTANTE_PI”, 3.14);



## Estruturas condicionais



> Em contrução



## Método GET



No método GET, os dados são passados pela URL. Ele deve ser usado quando o intuito for RECUPERAR DADOS.

```js
seusite.com.br/index.php?nome=Jefferson&idade=44
```

Podemos citar como exemplo de utilização, site de notícias.

> Obs: as variáveis lidas pelo método GET são entendidas, par default, como strings. Posteriomente, elas precisam ser tratadas no código PHP, caso se deseje torná-las de um tipo específico.



```js
// index.php
<p><?php echo echo $_GET['nome']; ?></p>
<p><?php echo echo $_GET['idade']; ?></p>
```



```js
<?php

//inclusao do Header
include('./includes/header.php');

//conexao com o banco de dados dbcsr
include('./includes/conexao.php');

?>


<form method="GET" action="noticia.php">
    Nome: <input type="text" name="nome"><br><br>
    Idade: <input type="text" name="idade"><br><br>
    E-mail: <input type="text" name="email"><br><br>
    <button type="submit">Enviar</button>
</form>

<?php

//inclusao do footer
include('./includes/footer.php');

?>
```



