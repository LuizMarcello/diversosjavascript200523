/* Criação de promessa */
const myPromise = new Promise((resolve, reject) => {
  const nome = "Matheus";

  if (nome === "Matheus") {
    resolve("Usuário Matheus encontrado");
  } else {
    reject("O Usuário Matheus não foi encontrado");
  }
});

/* "data" é a resposta do "resolve" ou "reject"  */
/* A promessa só é executada de fato, quando for
   encadeado o método "then" */
myPromise.then((data) => {
  console.log(data); ////////////////////////////////////
});

/////////////////////////////////////////////////////////////////////////////////////////////

//Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
  const nome = "Matheus";

  if (nome === "Matheus") {
    resolve("Usuário Matheus encontrado");
  } else {
    reject("O Usuário Matheus não foi encontrado");
  }
});

/* "data" é a resposta do "resolve" ou "reject"  */
/* A promessa só é executada de fato, quando for
   encadeado o método "then" */
/* Encadeamento de then's */
myPromise2
  .then((data) => {
    return data.toLowerCase();
  })
  .then((stringModificada) => {
    console.log(stringModificada); ////////////////////////////
  });

////////////////////////////////////////////////////////////////////////////////////////////

/* Tratando melhor quando acontecer um "reject"("Exception") */
/* Retôrno do método "catch()", da classe Promise, para tratar
   o "reject"(êrro) */
const myPromise3 = new Promise((resolve, reject) => {
  const nome = "João";

  if (nome === "Matheus") {
    resolve("Usuário Matheus encontrado");
  } else {
    reject("O Usuário Matheus não foi encontrado");
  }
});

myPromise3
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Aconteceu um êrro: " + err); /////////////////////////////////
  });

///////////////////////////////////////////////////////////////////////////////////////////

/* Resolver várias promessas de uma vêz só */
/* Usando o método estático "all()", da classe "Promise" */
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 ok!");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  resolve("P2 ok!");
});

const p3 = new Promise((resolve, reject) => {
  resolve("P3 ok!");
});

/* Resolvendo todas as promessas, usando um array */
/* Usando o método estático "all()", da classe "Promise" */
/* o "data" contém todas as resposta das promessas p1,p2,p3 juntas */
/* O método "all()" recebe um array de promessas, e só entrega
   a resposta quando todas promessas estiverem resolvidas */
const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
  console.log(data); ///////////////////////////////////////
});

console.log("Depois do all()");

///////////////////////////////////////////////////////////////////////////////////////////

/* Resolver várias promessas de uma vêz só */
/* Agora usando o método estático "race()", da classe "Promise" */
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P4 ok!");
  }, 3000);
});

const p5 = new Promise((resolve, reject) => {
  resolve("P5 ok!");
});

const p6 = new Promise((resolve, reject) => {
  resolve("P6 ok!");
});

/* Resolvendo todas as promessas, usando um array */
/* Agora usando o método estático "race()", da classe "Promise" */
/* o "data" contém todas as resposta das promessas p4,p5,p6 juntas */
/* O método race() recebe um array de promessas, e já libera a
   resposta da primeira promessa que estiver resolvida,
   ou seja, a que vai ganhar a corrida(race). */
const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
  console.log(data); ////////////////////////////////////////
});

/* Fetch request na API do GitHub */
/* Fetch API, API nativa do javascript(uma dependência a menos), cliente http,
   que faz requisições assíncronas(AJAX). O "AXIOS" não é nativo do javascript.*/

const userName = "luizmarcello";

/* ``: Para usar variável no meio da string */
/* o fetch() retorna uma promessa(promise), ele
   vai resolver primeiro a requisição, para depois 
   devolver alguma coisa. */
fetch(`https://api.github.com/users/${userName}`, {
  method: "GET",
  /* Para o github, tem que usar este header */
  headers: {
    accept: "application/vnd.github.v3+json",
  },
})
  .then((Response) => {
    console.log(typeof Response);
    console.log(Response);
    /* Para retornar a resposta do "fetch()" mais limpa,com
     os dados apenas, usa o "json" */
    return Response.json();
  })
  .then((data) => {
    console.log(`O nome do usuário é: ${data.name}`);
  })
  /* Método "catch()", no caso de reject(exception), êrro */
  .catch((err) => {
    console.log(`Houve algum êrro: ${err} `);
  });
