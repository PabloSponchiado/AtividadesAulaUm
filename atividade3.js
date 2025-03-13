var teclado = require("prompt-sync")();
console.log("-----------------------------------------");
console.log("--Convers\u00E3o de CELSIUS para FAHRENHEIT---");
console.log("-----------------------------------------");
var tempc = parseInt(teclado("digite a temperatura em celsius: "));
var tempf = 0;
tempf = (tempc * (9 / 5)) + 32;
console.log("a temperatura em FAHRENHEIT:".concat(tempf));
