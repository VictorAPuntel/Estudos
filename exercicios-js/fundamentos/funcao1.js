//Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}
imprimirSoma(10, 20);
imprimirSoma(2); //resultado se eu não passar o segundo resultado
imprimirSoma(1, 2, 3, 4, 5, 6, 7, 8, 9); //só vai somar os dois primeiros

//Função com retorno
function soma(a, b = 0) {
  return a + b;
}

console.log(soma(5, 10));
console.log(soma(5));
