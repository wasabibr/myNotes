# Uma reintrodução ao JavaScript (Tutorial de JS)



1. ## Introdução

  Por que uma reintrodução? Porque JavaScript é conhecida como a mais incompreendida linguagem de programação do mundo. Embora muitas vezes ridicularizada como um brinquedo, por baixo de sua simplicidade enganosa estão alguns recursos poderosos da linguagem, que agora é usado por um número incrível de aplicações de alto nível, mostrando que o conhecimento mais profundo desta tecnologia é uma habilidade importante para qualquer desenvolvedor web, mobile ou desktop.

  É sempre bom começar com a história da linguagem. A JavaScript foi criada em 1995 por Brendan Eich, um engenheiro da Netscape, e lançada pela primeira vez com o Netscape 2 no início de 1996. Foi inicialmente chamada de LiveScript, mas logo foi rebatizada, em uma decisão de marketing malfeita, para tentar crescer sobre a popularidade da linguagem Java da Sun Microsystem - apesar das duas terem muito pouco em comum. Esta tem sido uma fonte de confusão desde então.

  A Microsoft lançou uma versão compatível com a maior parte da linguagem, chamada de JScript, junto com o IE, três meses mais tarde. A Netscape apresentou a linguagem a Ecma International, uma organização européia de normalização, o que resultou na primeira edição do padrão ECMAScript em 1997. O padrão recebeu uma atualização significativa com o ECMAScript Edição 3 em 1999, e manteve-se praticamente estável desde então. A quarta edição foi abandonada, devido a diferenças políticas relativas à complexidade da linguagem. Muitas partes da quarta edição formam a base da nova edição ECMAScript 5, publicado em dezembro de 2009.

  Esta estabilidade foi uma grande notícia para os desenvolvedores, pois isto proporcionou que várias implementações em JavaScript tivessem muito tempo para se firmar. Eu vou focar quase exclusivamente no dialeto da edição 3. Para que seja facil se familiarizar, vou utilizar o termo JavaScript por todo o texto.

  Diferentemente da maioria das linguagens de programação , a linguagem JavaScript não possui o conceito de entrada e saída. Ela é projetada para funcionar como uma linguagem de script em um ambiente de terceiros, e cabe ao ambiente fornecer mecanismos para a comunicação com o mundo exterior. O ambiente de terceiros (hospedeiro) mais comum é o navegador, mas interpretadores JavaScript também pode ser encontrados no Adobe Acrobat, Photoshop, imagens SVG, Widget engine do Yahoo! , bem como ambientes de servidor, como Node.js. No entanto, a lista aqui apresentada das áreas nas quais a JavaScript é utilizada é apenas o começo. Ela também inclui bancos de dados NoSQL, como o código-fonte aberto Apache CouchDB, computadores embarcados, ou ambientes de trabalho completos, como o GNOME (um dos GUIs mais populares para os sistemas operacionais GNU / Linux) .

  

2. ## Visão Geral

   A JavaScript é uma linguagem dinâmica orientada a objetos; tem tipos e operadores, objetos e métodos. Sua sintaxe vem das linguagens Java e C, por isso tantas estruturas dessas linguagens se aplicam a JavaScript também. Uma das principais diferenças é que o JavaScript não tem classes; em vez disso, a funcionalidade de classe é realizada por protótipos de objetos. A outra diferença principal é que as funções são objetos, dando as funções a capacidade para armazenar código executável e serem passadas como parametro para qualquer outro objeto.

   Vamos começar pelo bloco de construção de qualquer linguagem: os tipos. Programas JavaScript manipulam valores, e esses valores todos pertencem a um tipo. Tipos de JavaScript são :

        - números

        - strings

        - booleanos

        - funções

        - objetos

   ... Ops, e o "indefinido" e o "nulo"- , que parecem um pouco estranhos. E arrays (vetores), que são um tipo especial de objeto. E as datas e expressões regulares, que são objetos que você ganha de graça. E para ser tecnicamente preciso, as funções são apenas um tipo especial de objeto. Assim, a lista de tipos se parece mais com isto:

        - números (numbers)

        - strings (strings)

        - booleanos (booleans)

        - objetos (objects)

            - funções (functions)

            - vetores (arrays)

            - datas (dates)

            - expressoes regulares (regexp)

        - nulo (null)

        - indefinido (undefined)

  E existem também alguns tipos para erros. As coisas são muito mais fáceis se ficarmos com a primeira lista, no entanto.

  