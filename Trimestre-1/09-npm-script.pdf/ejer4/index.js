const colors = require('colors');

if (process.argv.length < 3) {
  console.log('Debes proporcionar un color y un mensaje.');
  process.exit(1);
}

const color = process.argv[2].toLowerCase();
const message = "hola mundo!"

function printInColor(color, message) {
  switch (color) {
    case 'azul':
    console.log("azul")
      console.log(message.blue);
      break;
    case 'rojo':
        console.log("rojo")
      console.log(message.red);
      break;
    case 'verde':
    console.log("verde")
    console.log(message.green);
      break;
    default:
      console.log('Color no válido. Los colores válidos son: azul, rojo, verde.');
      break;
  }
}

printInColor(color, message);