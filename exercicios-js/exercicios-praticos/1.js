/**
 * Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
 * multiplicação e divisão desses valores.
 */

function basciMathExpressions(a, b) {
  const sum = () => console.log(`The sum is ${a + b}`);
  const sub = () => console.log(`The subtration is ${a - b}`);
  const multi = () => console.log(`The multiplication is ${a * b}`);
  const divi = () => console.log(`The division is ${a / b}`);

  return sum(), sub(), multi(), divi();
}

basciMathExpressions(10, 50);
