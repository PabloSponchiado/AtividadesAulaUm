var teclado = require("prompt-sync")();
console.log("--------------------------------");
console.log("-- CALCULO DA M\u00C9DIA DE ACERTOS--");
console.log("--------------------------------");
var designação = teclado("Digite o nome do participante:");
var n1 = parseInt(teclado("Digite o total de acertos:"));
var n2 = parseInt(teclado("Digite o total de acertos:"));
var n3 = parseInt(teclado("Digite o total de acertos:"));
var n4 = parseInt(teclado("Digite o total de acertos:"));
var n5 = parseInt(teclado("Digite o total de acertos:"));
var n6 = parseInt(teclado("Digite o total de acertos:"));
var n7 = parseInt(teclado("Digite o total de acertos:"));
var n8 = parseInt(teclado("Digite o total de acertos:"));
var n9 = parseInt(teclado("Digite o total de acertos:"));
var n10 = parseInt(teclado("Digite o total de acertos:"));
var media = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) / 10;
console.log("o nome do participante \u00E9 ".concat(designação, " e a sua m\u00E9dia de acertos \u00E9 ").concat(media));
