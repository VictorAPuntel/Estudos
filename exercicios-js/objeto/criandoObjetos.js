//usando a notação literal de objetos
const obj1 = {};
console.log(obj1);

//Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

//Funções construtoras
function Prdouto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new Prdouto("Caneta", 7.99, 0.15);
const p2 = new Prdouto("Cadeira", 2000, 0.15);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = criarFuncionario("João", 8000, 4);
const f2 = criarFuncionario("Maria", 10000, 0);
console.log(f1.getSalario(), f2.getSalario());

//Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

// Uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info":"Sou um JSON" }');
console.log(fromJSON.info);
