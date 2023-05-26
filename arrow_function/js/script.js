// arrow function

/* Sintaxe COM corpo */
/* Permite fazer uma lógica, por exemplo. */
/* Com vários argumentos */
// (a, b) => {
//   return a + b;
// };

/* Sintaxe SEM corpo, numa linha só */
/* Com vários argumentos */
// (a, b) => a + b;

let a = 5;
let b = 10;

let c = (num1, num2) => num1 + num2;

//console.log(c(a, b));

let d = (x, y) => {
  let op;
  if (x >= 5) {
    op = x * y;
  } else {
    op = x / y;
  }
  return op;
};
//console.log(d(a, b));

/* Um só argumento */
let frase = "O Luiz é um ótimo dev";
let fraseArray = (frase) => frase.split(" ");
//console.log(fraseArray(frase));

/* Sem argumentos */
//let semArg = () => {
//console.log("Não tenho argumentos");
//};
/* ou: */
/* Sem argumentos e Sem corpo */
let semArg = () =>
  //console.log("Não tenho argumentos");
  semArg();

/* CASOS DE USO, USANDO "ARROW-FUNCTIONS" */
let roupas = [
  /* Variável "roupas" recebe um array de objetos */
  { produto: "Camisa", preco: 25, cor: "Amarelo" },
  { produto: "Calça", preco: 80, cor: "Azul" },
  { produto: "Jaqueta", preco: 100, cor: "Preto" },
  { produto: "Camiseta", preco: 15, cor: "Rosa" },
  { produto: "Calção", preco: 20, cor: "Azul" },
];

/* A arrow-function com corpo, um só argumento, ficou dentro dos
   parênteses do método "filter()".
   Ela toda ficou como argumento para este método. */
let precoMaiorQue50 = roupas.filter((roupas) => {
  return roupas.preco >= 50;
});
//console.log(precoMaiorQue50);

/* Arrow-function sem argumento e com corpo
   Ela toda como argumento para o "setTimeout()". */
// setTimeout(() => {
//   console.log("Deu tempo");
// }, 150);

/* Esta acima como se fosse função normal */
// setTimeout(function() {
//   console.log("Deu tempo");
// }, 150);

/* CASOS DE USO, NÃO PODEM USAR ARROW-FUNCTIONS */
/* Variável "pessoa" recebe um objeto */
let pessoa1 = {
  nome: "Luiz",
  sayName: () => {
    //console.log(this.nome);
    //console.log(this);
  },
};

/* Tem que ser assim, usando função normal */
let pessoa2 = {
  nome: "Luiz",
  sayName: function () {
    console.log(this.nome);
    console.log(this);
  },
};

/* Ou ainda assim */
let pessoa3 = {
  nome: "Luiz",
  sayName() {
    console.log(this.nome);
    console.log(this);
  },
};
pessoa3.sayName();

let btn = document.getElementById("btn");
console.log(btn);

btn.addEventListener("click", function () {
  this.classList.toggle("classe");
});
