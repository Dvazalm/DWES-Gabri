const faker = require('faker');

const colors = require('colors');


// Función para generar un color aleatorio
function getColorAleatorio() {
  const colores = ['red', 'green', 'blue', 'yellow', 'magenta', 'cyan', 'white'];
  const numeroAleatorio = Math.floor(Math.random() * colores.length);
  const colorSeleccionado = colores[numeroAleatorio];
   console.log(`Console: Numero seleccionado en el array de colores ${numeroAleatorio} = ${colorSeleccionado}`);
  return colorSeleccionado;
}

function getNombreAleatorio(){
    const nombreElegido = faker.name.findName();
    console.log(`Console: El nombre seleccionado es ${nombreElegido}`);
    return nombreElegido;
}

const nombreAleatorio = getNombreAleatorio();
const colorAleatorio = getColorAleatorio();

console.log(colors[colorAleatorio](nombreAleatorio));

