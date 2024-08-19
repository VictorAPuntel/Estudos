let a = 7;
let b = 94;

//depois da troca... a = 94 e b = 7

let temp = a;
a = b;
b = temp[(a, b)] = [b, a]; //outra maneira de realizar o exercício

console.log(a);
console.log(b);
