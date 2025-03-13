var teclado = require("prompt-sync")();
console.log("-----------------------------------------");
console.log("--Convers\u00E3o de FAHRENHEIT para CELSIUS---");
console.log("-----------------------------------------");
var tempc = parseInt(teclado("digite a temperatura em fahrenheit: "));
var tempf;
tempf = (tempc * (9 / 5)) - 32;
console.log("a temperatura em FAHRENHEIT:".concat(tempf));
