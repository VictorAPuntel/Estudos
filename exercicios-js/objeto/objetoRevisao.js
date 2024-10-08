//coleção dinâmica de pares/chave valor
const produto = new Object();
produto.nome = "Cadeira";
produto["marca do produto"] = "Genérica";
produto.preco = 220;
console.log(produto);

delete produto.preco;
delete produto["marca do produto"];
console.log(produto);

const carro = {
  modelo: "A$",
  valor: 89000,
  proprietario: {
    nome: "Victor",
    idade: 27,
    endereco: {
      logradouro: "Rua ABC",
      numero: 123,
    },
  },
  condutores: [
    {
      nome: "Junior",
      idade: 19,
    },
    {
      nome: "Ana",
      idade: 25,
    },
  ],
  calcularValorSeguro: function () {
    //...
  },
};

carro.proprietario.endereco.numero = 1000;
carro["proprietario"]["endereco"]["logradouro"] = "Av Gigante";
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores);
// console.log(carro.condutores.length); Cuidado, isso derá um erro pois tentará acessar os dados de um valor undefined
