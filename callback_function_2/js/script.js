/* Exemplo 1 */
const saudacao = (nome) => alert("Olá " + nome)

const processaEntradaUsuario = (callbackk) => {
  const nome = prompt("Digite seu nome: ")
  callbackk(nome)
}

//processaEntradaUsuario(saudacao)

/* Exemplo 2 */
/* Tem que ser executado no console do navegador */
const callback = (ev) => alert("Aconteceu um evento " + ev.type);

window.addEventListener('click', callback)

/* Exemplo 3 */
const somar = (x, y) => x + y

const calcular = (x, y, computarrr) => computarrr(x, y)

const resultado = calcular(20, 30, somar)

//console.log(resultado)

/* Exemplo 4 */
const arr = [1, 2, 3]

const newArr = arr.map((x) => x + x)

console.log(newArr)