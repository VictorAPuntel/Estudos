const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); //remove o ultimo elemento do array
console.log(pilotos);

pilotos.push("Verstappen"); //adiciona um novo elemento na ultima posição do array
console.log(pilotos);

pilotos.shift(); //remove o primeiro elemento da lista
console.log(pilotos);

pilotos.unshift("Hamilton"); //adiciona um novo elmento no indice 0 do array
console.log(pilotos);

// O splice pode adicionar e remover elmentos do array
//adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

// remover
pilotos.splice(3, 1); // estamos removendo o Massa do array
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); //o indice 4 não entra no novo array nesse caso especifico
console.log(algunsPilotos2);
