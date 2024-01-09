const fs = require('fs');

const nombreFichero = "Text.txt";
const RutaArchivo = `C:/Users/DAVID/Desktop/Ejer Gabriel/06 - Módulos nativos/Ejer1/${nombreFichero}`;



// Lectura sincrona
try {
    const contenidoArchivoSincrrona = fs.readFileSync(RutaArchivo, 'utf8');
    const dataSync = `\n-El nombre del archivo es: ${nombreFichero}\n-Este es su contenido:\n | ${contenidoArchivoSincrrona}\n`;
    console.log(`◼ Lectura sincrona:${dataSync}`);
} catch (err) {
    console.error("Error en lectura síncrona:", err);
}



// Lectura asincrona
fs.readFile(RutaArchivo, 'utf8', (err, contenidoArchivoAsincrona) => {
    if (err) {
        console.error("Error en lectura asíncrona:", err);
        return;
    }

    const dataAsync = `\n-El nombre del archivo es: ${nombreFichero}\n-Este es su contenido:\n | ${contenidoArchivoAsincrona}\n`;
    console.log(`◼ Lectura asíncrona:${dataAsync}`);
});


//TExto de ejemplo
console.log("~~~Texto de ejemplo para verificar la asincronia~~~\n");
