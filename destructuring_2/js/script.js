/* DESTRUCTURING COM "ARRAYS": */
//const foo = [
//"Luiz", "Marcello", "Gabriel"
//];

/* Encapsulando variáveis separadas com os valores do retôrno */
//const [um, dois, tres] = foo

//console.log(um);
//console.log(dois);
//console.log(tres);

/* Outro exemplo: */
/* Declarando as variáveis */
//let a, b, c;

/* Encapsulando variáveis separadas com os valores do retôrno */
//[a, , c] = [1, 2, 3, 4]

//console.log(a)
//console.log(b)
//console.log(c)

/* Outro exemplo */
/* Declarando as variáveis */
//let d, e;

/* Encapsulando variáveis separadas com os valores do retôrno */
/* Nesse caso, "a" vai ser "1", porque existe valor a ser desestruturado */
/* Mas "e" vai ser "7", porque não tendo valor a ser desestruturado,
   ele assume o default. */
//[d = 5, e = 7] = [1]

//console.log(d)
//console.log(e)

/* Outro exemplo */
/* Declarando as variáveis */
//let f, g, h;
//[f = 5, g = 7, h = 10] = [1, undefined, 3]

//console.log(f)
//console.log(g)
//console.log(h)

/* Outro exemplo */
/* Declarando as variáveis */
//let i = 1;
//let j = 3;
//let temp;

/* Forma tradicional para fazer permutação de 
   valores entre "i" e "j". */
//temp = i
//i = j
//j = temp

/* Agora usando desestruturação para fazer a permutação */
//[i, j] = [j, i]

//console.log(i)
//console.log(j)

/* Outro exemplo */
/* Rest operator, spread operator */
//const [k, l, ...m] = [1, 2, 3, 4, 5]

//console.log(k)
//console.log(l)
//console.log(m)


/* DESTRUCTURING COM "OBJETOS": */
/* Um objeto */
//const o = {
//p: 42,
//q: true
//}

/* Encapsulando variáveis separadas com os valores do retôrno */
//const {
//p,
//q
//} = o

//console.log(p, q)

/* Outro exemplo */
/* Declarando as variáveis */
/* Para usar "const", sempre precisa ser inicializado com valores. */
/* Também não podem ser re-atribuidos valores */
/* Neste caso usar "let" */
//const ee, ff
//let ee, ff

/* Neste caso, tem que ser entre parênteses, para entender
   que é uma desestruturação de objeto. */
//({
//ee,
//ff
//} = {
//ee: 1,
//ff: 2
//});

//console.log(ee)
//console.log(ff)

/* Outro exemplo */
//const o = {
//p: 42,
//q: true
//}

/* Encapsulando variáveis separadas com os valores do retôrno */
//const {
//p: luiz,
//q: marcello
//} = o;

//console.log(luiz, marcello)

/* Outro exemplo */
//const {
//a = 10, b = 5
//} = {
//a: 3
//}

//console.log(a, b)

/* Outro exemplo */
const metadata = {
  title: "Scratchpad",
  translations: [{
    locale: "de",
    localization_tags: [],
    last_edit: "2014-04-14T08:43:37",
    url: "/de/docs/Tools/Scratchpad",
    title: "JavaScript-Umgebung"
  }],
  url: "/en-US/docs/tools/Scratchpad"
};

/* (Desestruturação)-Encapsulando variáveis separadas com os valores do retôrno */
const {
  title: englishTitle,
  translations: [{
    title: localeTitle
  }]
} = metadata

//console.log(englishTitle)
//console.log(localeTitle)


/* Outro exemplo */
/* Não é "arrow-function", é "function-declaration" */
function userId({
  iid
}) {
  return iid;
}

function whois({
  displayName: displayName,
  fullName: {
    firstName: name
  }
}) {
  //console.log(displayName + " is " + name)
}

const userr = {
  iid: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe"
  }
}
//console.log("userId: " + userId(userr))
whois(userr)


/* Outro exemplo */
let key = "z";
let {
  [key]: foo
} = {
  z: "bar"
}

console.log(foo)