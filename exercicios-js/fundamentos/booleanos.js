let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); //a ! serve para negar uma variavel, 2 negam a negação tornado-a verdadeira
console.log(!isAtivo);

console.log("os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" "); //o espaço em branco conta para que a string não seja considerada vazia
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)); //se o resultado atibuido a variavel for resolvido para verdadeiro, a expresão inteira se torna verdadeira

console.log("os falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("pra finalizar...");
console.log(!!("" || null || 0 || " "));

let nome = "Senhor Fontana";

console.log(!!nome ? nome : "Desconhecido");
