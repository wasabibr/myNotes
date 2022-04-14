# React
Uma biblioteca JavaScript para criar interfaces de usuário

> Diário de bordo:
>
> Primeiras noções do React. Futuramente, farei uma divisão dos assuntos.
>
>Jefferson

## Primeiras ideias

O React não é um framework e sim uma biblioteca voltada para a criação de interfaces (UI).

**Declarativo:** React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.

**aseado em componentes:** Crie componentes encapsulados que gerenciam seu próprio estado e então, combine-os para criar UIs complexas. Como a lógica do componente é escrita em JavaScript e não em templates, você pode facilmente passar diversos tipos de dados ao longo da sua aplicação e ainda manter o estado fora do DOM.

**Aprenda uma vez, use em qualquer lugar:** Não fazemos suposições sobre as outras tecnologias da sua stack, assim você pode desenvolver novos recursos com React sem reescrever o código existente. O React também pode ser renderizado no servidor, usando Node, e ser usado para criar aplicações mobile, através do React Native. Views declarativas fazem com que seu código seja mais previsível e simples de depurar.

## React e o seu ecossistema

### React

### JSX
EM poucas palavras, o JSX é uma extensão de sintaxe do JavaScript (daí o nome, **J**avaScript **S**yntax e**X**tension) que nos permite escrever HTML dentro do JavaScript.

Os críticos mais ferrenhos afirmavam que o JSX quebra um dos princípios básicos do desenvolvimento de software, que é o Separation of Concerns.

Argumentos contrários a essa afirmação:
* O React em si, a biblioteca e não o ecossistema, ou seja, representa apenas a parte da view da sua aplicação. Portanto, por definição, ele tem apenas um concern: renderizar a UI. Então quais concerns estão sendo violados?
* E mesmo que o JSX violasse esse princípio, a área de tecnologia evolui com o tempo. Se um dos princípios que nós sempre demos como verdade não fizer mais sentido para um determinado cenário, deveremos nos forçar a seguir esse princípio mesmo assim?

Com o tempo a comunidade percebeu que o JSX foi uma decisão acertada e que acabou se tornando um dos grandes alicerces do sucesso do React.



ES2015
Webpack
Flux/Redux
axios/fetch
Jest/Mocha

(completar)
