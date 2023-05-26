/* Sintaxe com "promise" */
function primeiraFuncao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Esperou isso aqui!");
      resolve();
    }, 3000);
  });
}

/* Sintaxe com "Async_function" */
async function segundaFuncao() {
  console.log("Iniciou");
  /* Invocando a função acima */
  /* Nas "async_function", onde precisa esperar, coloca "await" */
  await primeiraFuncao();
  console.log("Terminou");
}

//segundaFuncao();

//PRÁTICO
function getUser(id) {
  return (
    fetch(`https://reqres.in/api/users?id=${id}`)
      /* Encadeamentos com arrow_functions */
      .then((data) => data.json())
      /* Tratando êrros */
      .catch((err) => console.log(err))
  );
}

/* Async_function para mostrar o nome do usuário */
async function showUserName(id) {
  /* Tratando êrros nas "async_function" */
  try {
    /* Nas "async_function", onde precisa esperar, coloca "await" */
    const userr = await getUser(id);

    console.log(`O nome do usuário é: ${userr.data.first_name}`);
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}

showUserName(4);
