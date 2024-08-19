//valores não primitivos se alteram por referencia
const a = { nome: "Teste" };
console.log(a);

const b = a;
console.log(b);

b.nome = "Opa";
console.log(b);
console.log(a);

//valores primitivos não mudam por referencia
let c = 3;
console.log(c);

let d = c;
console.log(d++);
console.log(d);
console.log(c);

let valor; //não inicializada
console.log(valor);
// console.log(valor2); undefined, não foi declarada
valor = null;
console.log(valor); //null é ausência de valor
// console.log(valor.toString());
const produto = {};
console.log(produto);
console.log(produto.preco);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; //evitar atributo undefined
console.log(produto);
console.log(!!produto.preco);
//delete produto.preco -> maneira correta de se retirar um atributo
produto.preco = null;
console.log(produto);
console.log(!!produto.preco);
