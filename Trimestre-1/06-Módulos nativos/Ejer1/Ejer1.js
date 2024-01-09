const fs = require('fs')

const nombreFichero = "Text.txt";
const RutaArchivo = `C:/Users/DAVID/Desktop/Ejer Gabriel/06 - Módulos nativos/Ejer1/${nombreFichero}`;


try {
    const data = `\n\n-El nombre del archivo es: ${nombreFichero}\n-Este es su contenido:\n${fs.readFileSync(RutaArchivo, 'utf8')}\n`;
    console.log(data);
} catch (err) {
    console.error(err)
}