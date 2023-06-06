/* Era um array de objetos JSON,
   agora é um array de objetos javascript */
const objs = [{
    nome: "Luiz",
    sobrenome: "Marcello",
    esta_trabalhando: true,
    /* Um objeto */
    detalhes_profissao: {
      profissao: "Programador",
      empresa: "Empresa X"
    },
    /* Um array */
    hobbies: [
      "Programar",
      "Correr",
      "Ler"
    ]
  },

  {
    nome: "Carlos",
    sobrenome: "de Souza",
    esta_trabalhando: false,
    /* Um objeto */
    detalhes_profissao: {
      profissao: "Programador",
      empresa: "Empresa Y"
    },
    /* Um array */
    hobbies: [
      "Programar",
      "Correr",
      "Ler",
      "Cinema"
    ]
  }
]

//console.log(objs)

/* Obs: O javascript não lida com JSON diretamente,
        não reconhece JSON */

/* Transformando um objeto javascript(array de objetos)
   em JSON para poder transferir, para a API, por exemplo */
/* Do javascript, temos acesso a um objeto chamado "JSON" */
/* Realizando a conversão do objeto javascript para JSON */
/* JSON */
/* Quando é transferido para a API, por exemplo, ele vai
   como texto. Este método json "stringify()", faz com que
   ele seja um texto(string) como JSON válido. */
/* ENVIANDO PARA A API */
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

/* RECEBENDO O DADO JSON E TRANSFORMANDO EM UM
   ARRAY DE OBJETOS JAVASCRIPT VÁLIDO NOVAMENTE */
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

/* Agora já tendo acesso como um objeto javascript normal */
/* Método "map()" */
objData.map((pessoa) => {
  console.log(pessoa.nome)
})