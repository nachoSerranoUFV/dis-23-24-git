// const fs = require("fs");

//Tabla del 5

console.clear();
console.log("==================");
console.log("Tabla del 5"); 
console.log("==================");

let salida = "";
let salida_bis = "";

for (let i = 1; i <= 10; i++) {
    salida += `5 x ${i} = ${5 * i}\n`;
}   

// for (let i = 1; i <= 30; i++) {
//     salida_bis += `5 x ${i} = ${5 * i}\n`; //Comments by Nacho
// }   
console.log(salida);
console.log(salida_bis);