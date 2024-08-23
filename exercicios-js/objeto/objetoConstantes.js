// pessoa -> 123 -> {...}
const pessoa = { nome: "Victor" };
pessoa.nome = "Pedro";
console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa = { nome: "Ana" };
Object.freeze(pessoa); //O ponto freeze, congela o objeot impedindo ele de ser alterado, deletea, etc...
pessoa.nome = "Maria";
console.log(pessoa);

const pessaConstante = Object.freeze({ nome: "João" });
console.log(pessaConstante);
