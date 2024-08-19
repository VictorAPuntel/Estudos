let dobro = function (a) {
  return 2 * a;
};

dobro = (a) => {
  return 2 * a;
};

dobro = (a) => 2 * a; //retur implicito
console.log(dobro(Math.PI));

let ola = function () {
  return "Olá";
};

ola = () => "Olá";
ols = (_) => "Olá"; //possui um parametro
console.log(ola());
