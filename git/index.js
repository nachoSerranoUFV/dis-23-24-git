const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/config");
const colors = require("colors");


console.clear();

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

crearArchivo(argv.b, argv.l, argv.h)
  .then((fileName) => console.log(`${colors.rainbow(fileName)} created`))
  .catch((err) => console.log(err.message));
