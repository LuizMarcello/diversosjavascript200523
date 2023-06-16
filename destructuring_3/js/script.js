/* DESESTRUTURAÇÃO COM OBJETOS */
/* Constante "pessoa" recebe um objeto simples */
const pessoa = {
  name: "Luiz",
  age: 62
};

/* Constante "fruits2" recebe um objeto simples */
const fruits2 = {
  banana: "banana",
  pera: "pera",
  uva: "aqui não importa"
}

/* Objeto */
/* Declaração literal de função */
/* Desestruturando direto na função(como parâmetro) */
function liquidificador({
  uva
}) {
  console.log(uva)
}

//liquidificador(fruits2)

//const name = pessoa.name

/* Desestruturando */
//const {
//name
//} = pessoa
//console.log(name)

//const {
//age
//} = pessoa
//console.log(age)

//const {
//age: idade
//} = pessoa
//console.log(idade)

//const {
//name: nome
//} = pessoa
//console.log(nome)

//let idade1;
/* Colocando em variáveis que já existem */
//({
//age: idade1
//} = pessoa)
//console.log(idade1)


/* DESESTRUTURAÇÃO COM ARRAYS */
const fruits1 = ["banana", "pera", "uva"]

//const bananaaa = fruits[0]

/* Desestruturando */
const [banana, pera] = fruits1
//const [b, p] = fruits
//const [, b, p] = fruits
/* Rest operator */
//const [b, ...rest] = fruits1
//console.log(rest)

/* Objetos */
liquidificador({
  name: "Luiz",
  age: 62
})

/* Declaração literal de função */
/* Desestruturando direto na função(como parâmetro) */
function liquidificador({
  name,
  ...rest
}) {
  //console.log(rest)
}

/* Array */
//liquidificador2(["banana", "pera", "abacaxi"])
liquidificador2("banana")

/* Array */
/* Declaração literal de função */
/* Desestruturando direto na função(como parâmetro) */
function liquidificador2([primeiroValor, ...rest]) {
  console.log(primeiroValor + rest.join(""))
}