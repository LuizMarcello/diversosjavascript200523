/* "Expressão" de função */
/* Está sendo "atribuída" a uma variável */
const minhaF1 = function () {
  console.log("alguma coisa");
}

/* "Declaração" literal de uma função */
function minhaF2() {
  console.log("alguma coisa")
}

/* Arrow-function também é uma "expressão atribuida"
   a uma variável */
/* Assim, com chaves, quando se vai fazer várias coisas */
/* Numa arrow-function, o retôrno é automático, não
   precisa colocar "return". */
/* Arrow-functions são funções anônimas */
const funcao1 = () => {

}

/* Ou com uma linha só */
const funcao2 = () => "Ema expressão de função"

//funcao1();
//funcao2();
//minhaF1();
//minhaF2();

/* Assim o "this" aponta para o "GLOBAL" */
const thisGlobal = () => {
  console.log(this)
}
//thisGlobal();

/* Um objeto simples, composto de uma arrow-function */
/* Assim também o "this" aponta para o "GLOBAL" */
const obj1 = {
  thisLocal1: () => console.log(this)
}
//obj.thisLocal1()

/* Assim o "this" aponta para o "LOCAL" */
const obj2 = {
  thisLocal2: function () {
    const thisLocal3 = (() => console.log(this))
      ()
    console.log(thisLocal3);
  }
}
obj2.thisLocal2()