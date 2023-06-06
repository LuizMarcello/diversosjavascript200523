/* [] colchetes = array */
/* No array, geralmente, os dados inseridos condisem, ou fazem 
   sentido, uns com os outros, mesmo tipo de dados. */
/* Geralmente são dados do mesmo tipo, mas também podem ser
   de tipos diferente. */
var arr = [100, 200, 300, 400, 500];
/* Array inteiro, string e booleano */
/* Também funciona */
var arrB = [1, "luiz", true];
//console.log(arrB);

//console.log(arr);
/* Verificando o "tipo de dados" do array */
//console.log(typeof arr);
/* Quantidades de elementos que o array possui */
//console.log(arr.length);
/* Buscando pelo indice */
//console.log(arr[0]);
/* Buscando pelo índice */
//console.log(arr[3]);

/* {} chaves = Objeto */
/* Com chaves e valores */
var obj = {
  /* Chave e valor */
  nome: "Luiz",
  idade: 29,
};

//console.log(obj);
//console.log(typeof obj);
//console.log(obj.nome);
//console.log(obj.idade);

/* Também um array com vários objetos com mesmo sentido */
let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
  {
    color: "blue",
    type: "fox",
    registration: new Date("2023-03-03"),
    capacity: 5,
  },
];

/* Listando cada índice do array de objetos */
//console.log(cars[0]);
//console.log(cars[1]);
//console.log(cars[2]);

/* Usando um loop para listar todos os índices do array de objetos */
for (var i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
