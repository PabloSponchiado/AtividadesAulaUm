let teclado = require (`prompt-sync`)();

console.log(`-----------------------------------------`);
console.log(`--Conversão de CELSIUS para FAHRENHEIT---`);
console.log(`-----------------------------------------`);

let tempc: number = parseInt(teclado(`digite a temperatura em celsius: `));
let tempf: number = 0;

tempf =(tempc*(9/5)) + 32;

console.log(`a temperatura em FAHRENHEIT:${tempf}`)