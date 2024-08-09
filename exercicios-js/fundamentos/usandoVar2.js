var numero = 1 
{
    var numero = 2
    console.log('dentro do bloco =',numero);
}
console.log('fora do escopo =', numero);
//o Var é de escopo global, desde que não esteja dentro de uma função, por isso o valor dela foi substituido