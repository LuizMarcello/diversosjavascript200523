/* VAR */
/* Problemas de escopo */
/* A variável "nome" está no escopo global */
/* As outras duas variáveis de mesmo nome, estão
   dentro da função "dizerNome()"" e dentro do "if()". */
//var nome = "Pedro";

//function dizerNome() {
//var nome = "João";
//console.log("O nome é " + nome);
//}

// if (true) {
//   var nome = "Salete";
// }

// console.log(nome);
// dizerNome();


/* LET */
/* Separa por "blocos" */
/* A variável "nome" é um bloco */
/* O if() é outro bloco */
/* A "function()" é outro bloco */
/* O "for" é outro bloco */
/* Então imprime todas as variáveis "nome" separadamente */
/* Tudo é diferente, o "let" separa cada um dos blocos
   em seu próprio "escopo". */
/* Não pode declarar duas variáveis iguais no mesmo escopo */
let nome = "Pedro";
const numero = 1;

function dizerNome() {
  let nome = "João";
  console.log("O nome é " + nome);
}

if (true) {
  let nome = "Salete";
  const numero = 2;
  console.log(nome);
  console.log(numero);
}

console.log(nome);
console.log(numero);
dizerNome();

for (let i = 0; i < 3; i++) {
  let nome = "Anisio";
  console.log(nome);
  const numero = 3;
  console.log(numero);
}

/* CONST */
/* A diferença maior entre o "let" e o "const", é que o "const"
   é uma constante, então não pode mudar o valor dela durante o
   código, fica valor fixo. */
