//Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b);
};
imprimirSoma(2, 3);

//Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
  console.log(a + b);
};
soma(3, 6);

//retorno implicito
const subtracao = (a, b) => console.log(a - b);
subtracao(10, 5);

//sintaxe mais simples da Arrow function
const imprimir2 = (a) => console.log(a);
imprimir2(3);
