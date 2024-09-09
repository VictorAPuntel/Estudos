/*
 *Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
 * A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a
 * segunda retornará o valor da aplicação sob o regime de juros compostos.
 */

function simpleInterest(startingCapital, interestRate, applicationTime) {
  let interest = startingCapital * interestRate * applicationTime;
  return interest;
}
console.log("Juros Simples:" + simpleInterest(5000, 2, 360));

function compundInterest(startingCapital, interestRate, applicationTime) {
  let mount = startingCapital * Math.pow(1 + interestRate, applicationTime);
  return mount;
}

console.log("Juros Compostos:", compundInterest(5000, 2, 6));
