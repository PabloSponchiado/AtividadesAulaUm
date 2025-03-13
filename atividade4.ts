let teclado = require (`prompt-sync`)();

console.log(`-----------------------------------------`);
console.log(`--Conversão de FAHRENHEIT para CELSIUS---`);
console.log(`-----------------------------------------`);

let tempc: number = parseInt(teclado(`digite a temperatura em fahrenheit: `));
let tempf: number ;

tempf = (tempc*(9/5)) - 32;

console.log(`a temperatura em CELSIUS:${tempf}`)