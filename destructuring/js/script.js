/* DESESTRUTURAÇÃO ES6 */

/* DESTRUCTURING(ES6) COM "ARRAYS" */
let arr = [1, 2, 3, 4, 5];
/* Encapsulando variáveis com os valores do retôrno */
let [num1, num2, num3, num4, num5] = arr;

//console.log(num1);
//console.log(num2);
//console.log(num3);
//console.log(num4);
//console.log(num5);

/* Ignorando elementos com "ARRAYS" */
let arrDois = [5, 10, 15];
/* Encapsulando variáveis com os valores do retôrno */
const [, dez, quinze] = arrDois;

//console.log(dez);
//console.log(quinze);


/* DESTRUCTURING(ES6) COM "OBJETOS" */
const pessoa = {
  nome: "Luiz",
  profissao: "Programador",
  idade: 62
}

/* Encapsulando variáveis com os valores do retôrno */
let {
  nome: nomeVar,
  profissao: profissaoVar,
  idade: idadeVar
} = pessoa;

//console.log(nomeVar);
//console.log(profissaoVar);
//console.log(idadeVar);


/* DESTRUCTURING COM "FUNÇÕES" */
function teste() {
  return ['teste', 45];
}

/* Encapsulando variáveis com os valores do retôrno */
let [varA, varB] = teste();

//console.log(varA);
//console.log(varB);


/* DESTRUCTURING COM "STRINGS" */
let novaString = 'laranja';

/* Encapsulando variáveis com os valores do retôrno */
const [z, x, , v] = novaString;

//console.log(z, x, v)


/* REST OPERATOR (...) */
/* Um array de inteiros */
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* Encapsulando variáveis com os valores do retôrno */
/* Número "um" numa variável, o "dois" em outra, e o resto
   do array em outra */
const [um, dois, ...restoDoArray] = numeros2;

//console.log(um)
//console.log(dois)
//console.log(restoDoArray)

/* TOMAR CUIDADO */
let obj2 = {
  num1: 1,
  num2: 2
}

/* Inicializando duas variáveis, sem valores */
let p;
let q;

/* Agora declarando as variáveis */
/* Nunca iniciar uma declaração com "{}" chaves} */
/* Colocar toda a declaração entre parênteses */
({
  num1: p,
  num2: q
} = obj2);

console.log(p, q)