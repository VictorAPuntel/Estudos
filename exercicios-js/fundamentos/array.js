const exemploDeArray = [7.7, 8.9, 6.3, 9.2];
console.log(exemploDeArray[0], exemploDeArray[3]);
console.log(exemploDeArray[4]);

exemploDeArray[4] = 10;
console.log(exemploDeArray[4]);

exemploDeArray[15] = 11;
console.log(exemploDeArray);
console.log(exemploDeArray.length);

exemploDeArray.push({ id: 3 }, false, null, "teste");
console.log(exemploDeArray);

console.log(exemploDeArray.pop());
delete exemploDeArray[0];
console.log(exemploDeArray);

console.log(typeof exemploDeArray);
