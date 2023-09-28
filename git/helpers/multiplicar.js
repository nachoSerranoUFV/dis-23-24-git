const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta=10) => {
  // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
  //     if (err) throw err;
  //     console.log(`Archivo tabla del ${base} creado`);
  // });

   
  let salida, salida_print = "";
  for (let i = 1; i <= hasta; i++) {
    salida += `${base} ${'x'.blue} ${i} ${'='.blue} ${base * i} \n`;
    salida_print += `${base} x ${i} = ${base * i} \n`;
  }

  if (listar) {
    console.log("====================".green);
    console.log(" Tabla del: ".green, colors.blue(base));
    console.log("====================".green);
    console.log(salida);
  }

  try {
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida_print);
    return `tabla-${base}.txt`;
  } catch (erro) {
    throw erro;
  }

  //   console.log(`tabla-${base}.txt creado`);
};

module.exports = {
  crearArchivo,
};
