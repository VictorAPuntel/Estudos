/**
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
 */

function typeOfTriangules(a, b, c) {
  if ((a == b) == c) {
    return console.log(
      `O triângulo é Equilátero com as medidas: ${a} ${b} ${c}`
    );
  } else if ((a == b) !== c) {
    return console.log(
      `O triângulo é Isósceles com as medidas: ${a} ${b} ${c}`
    );
  } else if ((a !== b) == c) {
    return console.log(
      `O triângulo é Isósceles com as medidas: ${a} ${b} ${c}`
    );
  } else (a !== b) !== c;
  return console.log(`O triângulo é Escaleno com as medidas: ${a} ${b} ${c}`);
}

typeOfTriangules(10, 10, 10);
