const escola = 'Estudo Pessoal'

console.log(escola.charAt(4));

console.log(escola.charAt(14)); //não retorna nada, pois não tem letra no indice 14

console.log(escola.charCodeAt(3)); //tabela unicode 

console.log(escola.indexOf('t')); //o valor tem que estar entre ''

console.log(escola.substring(1)); 

console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola).concat("!"));

console.log(escola.replace('o', 'u')); //no primerio parametro você escolhe o que quer substituir na função/variavel e o segundo parametro é a substituição

console.log('Ana, Maria, Pedro'.split(','));
