// novo recurso no ES2015

const pessoa = {
    nome: 'Victor',
    idade: 27,
    endereco: {
        logradouro: 'Rua Miguel Vedoy',
        numero: 77
    }
}

const {nome, idade} = pessoa
console.log(nome, idade);

const {nome: n, idade: i} = pessoa
console.log(n, i);

const {sobrenome, humor = 'daquele jeito...'} = pessoa 
console.log(sobrenome, humor);

const {endereco: {logradouro, numero, cep = 99072655}} = pessoa
console.log(logradouro, numero, cep);

const {conta: {ag, num}} = pessoa
console.log(ag, num);
