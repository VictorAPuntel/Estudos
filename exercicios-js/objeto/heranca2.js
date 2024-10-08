// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = "0"; // não recomendado
const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B" };
const filho = { __proto__: pai, attr3: "C" };
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
  velAtual: 0,
  velMAx: 200,
  aceleraMais(delta) {
    if (this.velAtual + delta <= this.velMAx) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMAx;
    }
  },
  status() {
    return `${this.velAtual}Km/H de ${this.velMAx}Km/H`;
  },
};

const ferrari = {
  modelo: "F40",
  velMAx: 324, //shadowing
};

const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo} : ${super.status()}`;
  },
};

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.aceleraMais(100);
console.log(volvo.status());

ferrari.aceleraMais(300);
console.log(ferrari.status());
