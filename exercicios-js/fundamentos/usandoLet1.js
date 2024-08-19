var numero = 1;
{
  let numero = 2;
  console.log("dentro do bloco", numero);
  //o let funciona por escopo/bloco de código
}

console.log("fora do bloco", numero);
//nesse caso, como temos var e let, os numeros não se alteram

let numero2 = 3;
{
  let numero2 = 4;
  console.log("dentro do bloco", numero2);
  //como aqui o escopo é menor, ele dá prioriade para o que está dentro do escopo
}

console.log("fora do bloco", numero2);
