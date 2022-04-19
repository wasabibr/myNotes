# Git / GitHub
_Lista de comandos básicos e dicas de utilização_

>O Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.
>Enquanto o Git é um software VCS (Version Control System) local que permite aos desenvolvedores salvar snapshots de seus projetos ao longo do tempo. Geralmente é melhor para uso individual. GitHub é uma plataforma baseada na web que incorpora os recursos de controle de versões do gitHub para que possam ser usados colaborativamente.


## Introdução ao Git

>A tecla **TAB** completa o nome da pasta, ou arquivo, que existe com uma primeira indicada.

### Obtendo ajuda
```js
$ git help <verb>
$ git <verb> --help
$ git man  git -<verb>
```

### Versão do Git
```js
$ git --version
```

### Iniciar o Git
```js
$ git init
```

### Configurando repositório
```js
$ git config --list
$ git config --global --unset user.email
$ git config --global --unset user.nickname
$ git config --global --unset user.email "jefframosbr@gmail.com"
$ git config --global --unset user.nickname "jefframosbr"
$ git remote add origin https://github.com/wasabibr/livro-receitas.git
$ git remote -v
$ git push origin master
```

### Ver status dos arquivos para versionamento
```js
$ git status
```

### Iniciar versionamento
```js
// engloba tudo
$ git add .
```
ou
```js
// similar ao "git add ."
$ git add *
```
ou
```js
$ git add <nome-do-arquivo>
```
ou
```js
// seleciona apenas os arquivos com uma extensão específica
$ git add *.js
```

### Criar um commit
```js
$ git commit -m "text"
```

### Resolvendo conflitos
```js
$ git pull origin master
$ git clone https://github.com/python/cpython.git
```

### Ignorando arquivo
```js
$ 
```
ou
```js
$ 
```
ou
```js
$ 
```

### Clonando repositório
```js
$ git clone <endereço>
```
