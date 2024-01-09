const colors = require('colors');

// No se por qué el "require" no me va con chalk, pero vendito sea ChatGPT y su infinito conocimiento 😇🙏
import('chalk').then(chalk => {
  function imprimirFecha() {
    const now = new Date();
    const fechaCompleta = `${padLeft(now.getDate())}-${padLeft(now.getMonth() + 1)}-${now.getFullYear()} ${padLeft(now.getHours())}:${padLeft(now.getMinutes())}:${padLeft(now.getSeconds())}`;

    if (now.getSeconds() === 0 || now.getSeconds() % 10 === 0) {
      console.log(colors.green(fechaCompleta));
    } else {
      console.log(fechaCompleta);
    }
  }

  function padLeft(value) {
    return value.toString().padStart(2, '0');
  }

  // Imprimir cada segundo
  setInterval(imprimirFecha, 1000);
});
