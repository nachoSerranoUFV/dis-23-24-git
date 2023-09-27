// const fs = require("fs");

//Tabla del 5

console.clear();
console.log("==================");
console.log("Tabla del 5"); 
console.log("==================");

let salida = "";

for (let i = 1; i <= 10; i++) {
    salida += `5 x ${i} = ${5 * i}\n`; //Adding \n to make a new line
}   
console.log(salida);