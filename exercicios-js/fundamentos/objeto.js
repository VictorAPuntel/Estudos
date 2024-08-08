//objetos são um conjunto de chave e valor
const prod1 = {}
prod1.nome = 'Celular top de linha'
console.log(prod1);
prod1.preco = 5000
console.log(prod1);
//o nome e valor foram adicionados dinâmicamente
prod1['Desconto top'] = 0.40 //evitar atributos com espaço
console.log(prod1);

const prod2 = {
    nome: 'Caneta Bic',
    valor: 2.50,
    obj: {
        cor: 'azul',
        obj: {
            tipo: 'Clássica'
        }
    }
}
console.log(prod2);

//exemplo de JSON
'{"nome": "Camisa Polo", "Preco": 79.90}'