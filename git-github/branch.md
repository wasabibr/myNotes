# Trabalhando com Branches no GitHub



## Primeiros conceitos sobre branches

> É sempre interessante que o nome da branch seja o mais descritível possível. Por exemplo, se estivermos trabalhando alguma funcionalidade, que o nome dessa branch seja o mesmo que a funcionalidade em questão.



### Introdução às branches

<img src="./img/v01f01.png">

<img src="./img/v01f02.png">

<img src="./img/v01f03.png">

<img src="./img/v01f04.png">

<img src="./img/v01f05.png">



### Entendendo na prática sobre branches



#### Main vs Master

> Por muitos anos a branch padrão, na instalação do Git foi a master. Por outro lado, a branch padrão no GitHub é a main.

Quando se instala o **Git** em nossa máquina, atualmente, é perguntado qual será o **nome da branch principal**, se **master**, ou outro nome qualquer.

Em paralelo, quando se cria um novo repositório no **GitHub**, não existe nenhuma branch atrelada a ele, uma vez que não houve um commit. Todavia, se no momento da criação do repositório, adicionarmos a criação do **README.md** e/ou do **gitingnore**, será feito um primeiro commit e com isso, a nomeação da **branch principal** como **main**.



#### Guiando-se nas branches com a tag HEAD

> Ferramenta **visualizing git**: https://git-school.github.io/visualizing-git/



**Git HEAD**: A HEAD no git representa a versão que você está trabalhando no momento. Normalmente quando fazemos checkout de uma branch normal, o git automaticamente coloca o ponteiro da HEAD no local certo com a ultima versão daquela branch. E com isso podemos continuar trabalhando sem problemas



#### Navegação em branches

> O camando checkout cria uma nova branch com o nome indicado e o atributo -b faz com que você comece a usá-la.

```js
$ git checkout -b <nome da nova branch>
```

ou

```js
$ git checkout <nome da nova branch>
$ git branch <nome da nova branch>
```

#### Mesclando branches

> O comando merge serve para mesclar uma branch secundária à uma branch principal.

```js
$ git merge <nome da branch que queremos fazer o merge>
```

#### Mudando o nome de uma branch (localmente)

```js
// Esse comando é utilizado quando se deseja mudar o nome da branch em que estamos naquele momento
$ git branch -m <novo nome da branch atual>
```

```js
// Essa comando é utilizado quando não estamos na branch a qual queremos mudar o nome
$ git branch -m <nome da branch a ser mudada> <novo nome da branch a ser mudada>
```

#### Deletando uma branch (localmente)

```js
$ git branch -d <nome da branch>
```

#### Criando um backup das alterações atuais

O Git stash arquiva alterações não commitadas do seu local de trabalho, ou seja, ele volta para o estado do seu último commit guardando as alterações adicionais que você tinha feito. Fazendo uma analogia, é quase como se fizesse um backup das modificações dos seus arquivos.

Existem algumas situações bem úteis para utilizar o comando, algumas delas listadas abaixo:

- Você está trabalhando em algumas modificações e precisa fazer um teste desconsiderando o que você fez, mas sem perder tudo.
- Você começou a desenvolver na branch errada e não quer perder as alterações.
- Decidiu que vai criar uma nova branch a partir dessas modificações e não mais vai trabalhar na branch que está.
- Testará uma nova abordagem para o mesmo problema sem perder a versão que estava trabalhando e também sem precisar fazer um commit.
- Precisará fazer uma modificação em um outro branch ou até fazer um conserto rápido, mas não quer perder as alterações que fez até agora e nem fazer um commit. 

Em todas essas situações você pode utilizar o git stash para ajudar você. 

O que acontece na prática é que o Git cria uma branch temporária com todas as alterações que você tinha feito, volta para a branch que você estava trabalhando e desfaz tudo que não estava commitado. Ao longo desse post, vamos explicar melhor como fazer para recuperar essas alterações, como criar novas branches a partir delas, entre outras opções.  

> O stash funciona como se fosse um array, com indice indo de zero a n. Logo podemos salvar uma série de elementos.

```js
// Estando na branch main
$ echo > arquivo1.txt

$ echo > arquivo2.txt

$ ls
arquivo 1.txt arquivo2.txt

$ git add *

$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed?
  (use "git restore --staged <file>..." to unstage)
        new file:   arquivo1.txt
        new file:   arquivo2.txt
```

```js
// Criando um nova branch e mudando para ela
$ git checkout -b <nome da branch>
Switched to a new branch '<nome da branch>'

// Estando na branch <nome da branch>
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed?
  (use "git restore --staged <file>..." to unstage)
        new file:   arquivo1.txt
        new file:   arquivo2.txt
```

> Podemos notar que alterações feitas no main, foram para a nova branch, ou seja, carregamos um contexto.

A partir daí, se fizermos
```js
// Estando na branch <nome da branch>
$ git stash save "Adicionando arquivos iniciando alterações"
Saved working directory and index state on <nome da branch>: Adicionando arquivos iniciando alterações

$ git stash list
stash@{0}: On <nome da branch>: Adicionando arquivos iniciando alterações

$ git status
On branch <nome da branch>
nothing to commit, working tree clean

$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'

$ git status
On branch main
Your branch is up to date with 'origin/main'

nothing to commit, working tree clean
```
Isso quer dizer que tudo aquilo que foi alterado, mas não foi commitado, foi deixado numa "caixinha" aguargando o momento apropriado para ser trabalhado novamento.

Agora se fizermos

```js
// Voltando para a branch <nome da branch>
$ git checkout <nome da branch>
Switched to branch '<nome da branch>'

$ echo > arquivo3.txt

$ git add *

$ git status
On branch <nome da branch>
Changes to be committed?
  (use "git restore --staged <file>..." to unstage)
        new file:   arquivo3.txt

$ git stash
Saved working directory and index state WIP on <nome da branch>: 3036d69 Adiciona arquivo e na branch nova
```

> WIP = work in progress

```js
$ git stash list
stash@{0}: WIP on <nome da branch>: 3036d69 Adiciona arquivo e na branch nova
stash@{1}: On <nome da branch>: Adicionando arquivos iniciando alterações
```
Agora, para que possamos voltar a trabalhar com o que foi inserido numa "caixinha" específica, basta fazer
```js
$ git stash pop 1
On branch <nome da branch>
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   arquivo1.txt
        new file:   arquivo2.txt

Dropped refs/stash@{1} (0e...f9c4)

$ git status
On branch <nome da branch>
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   arquivo1.txt
        new file:   arquivo2.txt
```

Para limpar o stash podemos fazer

```js
$ git stash list
stash@{0}: WIP on <nome da branch>: 3036d69 Adiciona arquivo e na branch nova

$ git stash clear

$ git stash list
```

> Novos comentários

Texto em construção


## Visualizaçao de histórico

```js
$ git clone https://github.com/github/docs.git

$ cd docs

$ git log
.
.
.
// Lista dos commits
// Para sair tecle Q

// Para visualizar o histórico de uma pasta específica
$ git log contributing

// Para visualizar o histórico de um tipo de arquivo específico
$ git log README.md
```

Se fizermos

```js
// Teremos o histórico de commits de forma resumida
$ git log --oneline

// Mostra de forma "gáfica", estilizada, os históricos
$ git log --graph

// Ferramenta instalada, par default, quando se instala o git no Windows
// Funciona de forma similar ao que acontece no comando acima
$ gitk
```

> Depois verificar mais ferramentas gráficas para o git/github
> 
> GitHub Desktop => https://desktop.github.com/
> 
> GitKraken => https://www.gitkraken.com/
> Para quem usa o VS CODE, uma solução oferecida é o GitLens



## Entenda como reverter commits







## Estruturando commits





