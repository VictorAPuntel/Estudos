/** Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
 *  e o resto da divisão destes dois valores.
 */
const dividendAndDivisor = (dividend, divisor) =>
  console.log(
    `The result of division is ${dividend / divisor} and the rest is ${
      dividend % divisor
    }`
  );
dividendAndDivisor(500, 8);
