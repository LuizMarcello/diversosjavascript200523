/* 1 - GET com "FETCH" */
fetch("https://jsonplaceholder.typicode.com/todos")
  /* Transformado os objetos de texto(json) para objetos javascript válidos,
     para poderem ser usados no nosso código. */
  /* Tanto o "axios" como o "fetch" são "promises based",
     com "promises" ou com "sync await". */
  .then((response) => response.json())
  /* Agora utilizando os dados no código */
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
/////////////////////////////////////////////////////////////////
/*  2 - GET com "AXIOS" */
axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    /* "response.data": Toda a resposta que veio da requisição,
       dados e configurações. */
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
/////////////////////////////////////////////////////////////////
/* 3 - POST com "FETCH" */
const data = {
  title: "Algum Título",
  content: "Algum Conteúdo...",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  /* Configurando o dado para ser enviado como JSON,
     não pode ser enviado como javascript. */
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  /* Agora utilizando os dados no código */
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
///////////////////////////////////////////////////////////////////
/* 4 - POST com "AXIOS" */
axios
  .post("https://jsonplaceholder.typicode.com/posts", data)
  .then((response) => {
    /* "response.data": Toda a resposta que veio da requisição,
       dados e configurações. */
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
