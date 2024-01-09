const opcionesUsuario = ['piedra', 'papel', 'tijera'];
const eleccionUsuario = opcionesUsuario[ Math.floor(Math.random() * 3) ];

let resultado = '';

const opcionesBot = ['piedra', 'papel', 'tijera'];
const eleccionBot = opcionesBot[ Math.floor(Math.random() * 3) ];

if (eleccionUsuario === eleccionBot){
     resultado = 'EMPATE';
}else if(eleccionUsuario == 'piedra' && eleccionBot == 'papel' || eleccionUsuario == 'papel' && eleccionBot == 'tijera' || eleccionUsuario == 'tijera' && eleccionBot == 'piedra'){
    resultado = 'PERDISTE';
} else if (eleccionUsuario == 'piedra' && eleccionBot == 'tijera' || eleccionUsuario == 'papel' && eleccionBot == 'piedra' || eleccionUsuario == 'tijera' && eleccionBot == 'papel') {
      resultado = 'GANASTE';
}
console.log(`\nElegiste -${eleccionUsuario}- y el BOT eligio -${eleccionBot}-, ${resultado}\n\n` );
