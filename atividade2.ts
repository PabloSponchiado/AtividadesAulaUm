let teclado = require(`prompt-sync`)();

console.log(`--------------------------------`)
console.log(`-- CALCULO DA MÉDIA DE ACERTOS--`)
console.log(`--------------------------------`)

let designação: string = teclado (`Digite o nome do participante:`);
let n1: number = parseInt(teclado(`Digite o total de acertos:`));
let n2: number = parseInt(teclado(`Digite o total de acertos:`));
let n3: number = parseInt(teclado(`Digite o total de acertos:`));
let n4: number = parseInt(teclado(`Digite o total de acertos:`));
let n5: number = parseInt(teclado(`Digite o total de acertos:`));
let n6: number = parseInt(teclado(`Digite o total de acertos:`));
let n7: number = parseInt(teclado(`Digite o total de acertos:`));
let n8: number = parseInt(teclado(`Digite o total de acertos:`));
let n9: number = parseInt(teclado(`Digite o total de acertos:`));
let n10: number = parseInt(teclado(`Digite o total de acertos:`));

let media: number = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) /10;

console.log(`o nome do participante é ${designação} e a sua média de acertos é ${media}`);
