// JavaScript: métodos de Arrays que preciso conhecer!


// Arrays

const numbersList = [4, 5, 7, 8, 2, 9, 1, 3, 6, 10];

const usersList = [
	{name: 'Jefferson', age: 44, credit: 600},
	{name: 'Erika', age: 35, credit: 700},
	{name: 'Alice', age: 18, credit: 300},
	{name: 'Monik', age: 37, credit: 200},
];


// .forEach()

/* 
Caso você precise executar algum código para cada elemento do Array, executar um 
forEach é muito mais simples do que criar um for ou while, já que não precisamos 
declarar variáveis de controle. 
*/

/*
let myHTML = '<ul>';
numbersList.forEach((number, index, array) => {
	myHTML += `<li>${number}</li>`;
});
myHTML += '</ul>';
*/

/*
O .forEach() irá jogar cada um dos elemetos do Array no primeiro parâmetro, o 
índice do elemento no segundo e o Array original no terceiro. Claro que se não 
for usar, pode colocar apenas o primeiro
*/

/*
let myHTML = '<ul>';
numbersList.forEach(number => myHTML += `<li>${number}</li>` );
myHTML += '</ul>';
*/


// .filter()

/* 
Como o próprio nome indica, serve para filtrarmos os elementos de um Array. 
Passamos para ele uma função. Se essa função retornar true, o elemento será 
inserido no novo Array que será criado. Se a função retornar false, o elemento 
será ignorado.
*/

const newUsersListFilter = usersList.filter((user, index, array) => user.credit > 500);
console.log(newUsersListFilter);

/* Resultado:
[
  { name: 'Jefferson', age: 44, credit: 600 },
  { name: 'Erika', age: 35, credit: 900 }
]
*/


// .map()

/* 
Nós utilizamos o .map() quando queremos fazer alguma modificação nos elementos 
de um Array. 
*/

const newUsersListMap1 = usersList.map((user, index, array) => {
	user.credit += 100;
	return user;
})
console.log(newUsersListMap1);

/* 
No exemplo acima alteramos o valor de uma propriedade de cada um dos elementos
do Array. Na última linha nós precisamos executar o comando return para indicar 
o que será retornado para o Array. No final teremos um novo Array.
*/

/* Resultado:
[
	{ name: 'Jefferson', age: 44, credit: 700 },
	{ name: 'Erika', age: 35, credit: 1000 },
	{ name: 'Alice', age: 18, credit: 400 },
	{ name: 'Monik', age: 37, credit: 300 }
]
*/

/* 
Também pode ser interessante se quisermos alterar a estrutura dos objetos do Array. 
Podemos pegar o exemplo de cima: suponha que a gente agora queira um Array com o 
nome de todos os usuários da nossa lista. 
*/

const newUsersListMap2 = usersList.map((user, index, array) => {
	return user.name;
})
console.log(newUsersListMap2);

/* Resultado:
[ 'Jefferson', 'Erika', 'Alice', 'Monik' ]
*/

/*
Outro exemplo bem simples, aproveitando a simplicidade das Arrow Functions: dobrar 
o valor dos números de um
*/

console.log(numbersList.map(number => number * 2));

/* Resultado:
[2, 4, 6, 8, 10]
*/


// .find()

/* 
Usamos esse método quando queremos encontrar algum elemento dentro no Array. Para isso, 
passamos uma função que irá retornar true ou false. O primeiro true que for retornado 
irá finalizar a função e retornar o elemento em que estamos. 
*/

const newUsersListFind = usersList.find((user, index, array) => user.name === 'Alice');
console.log(newUsersListFind);

/* Resultado:
{ name: 'Alice', age: 18, credit: 400 }
*/


// .findIndex()

/* 
Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de 
retornar o próprio elemento. 
*/

const newUsersListFindIndex = usersList.findIndex((user, index, array) => user.name === 'Alice');
console.log(newUsersListFindIndex);

/* Resultado:
	2
*/


// .every()

/*
Serve para testarmos se todos os elementos do Array passam em uma condição. Passamos 
uma função que retorna true ou false. Se todos os retornos forem true, significa que 
todos os elementos passaram no teste, e a função retornará true.
*/

const newUsersListEvery1 = usersList.every((user, index, array) => user.credit < 1000);
const newUsersListEvery2 = usersList.every(user => user.credit < 500);
console.log(newUsersListEvery1, newUsersListEvery2);

/*
No primeiro nós testamos se todos os usuários possuem crédito menor que 1000. Como todos 
passaram no teste, o resultado de result1 será true. No segundo nós testamos se todos os 
usuários possuem crédito menor que 500. Como não são todos que passam nesse teste, o 
resultado de result2 será false.
*/


// .some()

/*
O .some() faz algo parecido com o .every(). A diferença é que o .every() só retorna true 
se todos os elementos passarem no teste. O .some() retorna true se pelo menos um elemento 
do Array passar no teste.
*/

const newUsersListSome = usersList.some((user, index, array) => user.credit === 300);
console.log(newUsersListSome);

/*
Verificamos se há pelo menos um usuário com crédito igual a 300. O resultado será true.
*/


// .sort()

/*
O .sort() serve para ordenar os elementos de Arrays. Muitas pessoas utilizam este método 
de maneira errada, apenas executando array.sort(). Isso pode causar retornos inesperados, 
pois os elementos serão convertidos em texto. O correto é passar uma função que compare 
dois elementos. Assim, podemos ordenar um Array com qualquer tipo de objeto, ordenando por 
qualquer propriedade.
*/

const orderedList1 = numbersList.sort((a, b) => {
	if(a < b){
	   return -1;
	} else if(a > b){
		return 1;
	}
	return 0;
})
console.log(orderedList1);

/*
A função de ordenação sempre recebe dois elementos. Se o primeiro for menor, devemos retornar 
um número menor que 0. Se o primeiro for maior, devemos retornar um número maior do que 0. Se 
forem iguais, retornamos 0. Neste caso, poderíamos simplificar a ordenação de números.
*/

const orderedList2 = numbersList.sort((a, b) => a > b ? 1 : -1 );
console.log(orderedList2);

// ou ainda

const orderedList3 = numbersList.sort((a, b) => a - b );
console.log(orderedList3);

/*
Para ter a ordenação em ordem decrescente, basta inverter o retorno da função.
*/

const orderedList4 = numbersList.sort((a, b) => a > b ? -1 : 1 );
console.log(orderedList4);

// ou ainda

const orderedList5 = numbersList.sort((a, b) => b - a );
console.log(orderedList5);

/*
Podemos utilizar em elementos mais complexos:
*/

const orderedUsers = usersList.sort((a, b) => a.credit - b.credit);
console.log(orderedUsers);

/*
Com isso teremos um novo Array com os usuários ordenados pela quantidade de crédito.
*/


// .reduce()

/*
Esta função serve para reduzirmos o conteúdo de um Array para apenas um elemento. O 
exemplo mais clássico é somar todos os valores de um Array.
*/

const total = numbersList.reduce((total, currentElement) => total + currentElement);
console.log(total);

/*
A função que executamos recebe como primeiro parâmetro uma variável que irá acumular um 
valor e como segundo parâmetro teremos cada um dos elementos do Array a cada iteração.
*/