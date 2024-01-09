import { carpetaArchivos } from "../config.js";
import fs from 'fs';
import path from "path";


/* ======================= CREAR DOCUMENTO ======================= */
export function crearDocumentoController(req, res) {
    const nombre = req.params.nombre;

    // Verifica si la carpeta existe, si no, la crea
    if (!fs.existsSync(carpetaArchivos)) {
        res.send(`La carpeta ${carpetaArchivos} no existe. Se ha generado automaticamente`)
        fs.mkdirSync(carpetaArchivos);
    }

    const rutaArchivo = path.join(carpetaArchivos, `${nombre}.txt`);

    // Verifica si el archivo ya existe
    if (fs.existsSync(rutaArchivo)) {
        res.send(`El archivo <b>${nombre}.txt</b> ya existe en la ruta <b>"${carpetaArchivos}"</b>`);
    } else {
        // Crea el archivo
        fs.writeFileSync(rutaArchivo, 'Contenido del archivo', 'utf-8');
        res.send(`Archivo <b>${nombre}.txt</b> fue <b style="color:lime";>creado</b> con exito en la ruta "${carpetaArchivos}"`);
    }
};



/* ======================= ELIMINAR DOCUMENTO ======================= */
export function eliminarDocumentoController(req, res) {
    const nombre = req.params.nombre;

    // Verifica si la carpeta existe, si no, responde con un mensaje
    if (!fs.existsSync(carpetaArchivos)) {
        res.send(`La carpeta ${carpetaArchivos} no existe.`);
        return;
    }

    const rutaArchivo = path.join(carpetaArchivos, `${nombre}.txt`);
    
    // Verifica si el archivo ya existe
    if (fs.existsSync(rutaArchivo)) {
        // Elimina el archivo
        fs.unlinkSync(rutaArchivo);
        res.send(`El archivo <b>${nombre}.txt</b> se <b style="color:red";>eliminó</b> en la ruta <b>"${carpetaArchivos}"</b>.`);
    } else {
        res.send(`<b>${nombre}.txt</b> no existe en la ruta <b>"${carpetaArchivos}"</b>.`);
    }
};



/* ======================= VER TODOS LOS DOCUMENTO ======================= */
export function verArchivosController(req, res) {
    // Verifica si la carpeta existe, si no, responde con un mensaje
    if (!fs.existsSync(carpetaArchivos)) {
        res.send(`La carpeta ${carpetaArchivos} no existe.`);
        return;
    }

    // Lee todos los archivos en la carpeta
    const archivos = fs.readdirSync(carpetaArchivos);

    // Verifica si hay archivos en la carpeta
    if (archivos.length === 0) {
        res.send(`No hay archivos en la carpeta ${carpetaArchivos}.`);
    } else {
        // Envía la lista de archivos como respuesta
        res.send(`
        <h2>Archivos en ${carpetaArchivos}:
        </h2>
        <span style="font-size:20px;">
        ${archivos.join('<br>')}
        </span>
        `);
    }
    }

    

/* ======================= VER DOCUMENTO ======================= */
export function verDocumentoController(req, res) {
    const nombre = req.params.nombre;

    // Verifica si la carpeta existe, si no, responde con un mensaje
    if (!fs.existsSync(carpetaArchivos)) {
        res.send(`La carpeta ${carpetaArchivos} no existe.`);
        return;
    }

    const rutaArchivo = path.join(carpetaArchivos, `${nombre}.txt`);

    // Verifica si el archivo existe
    if (fs.existsSync(rutaArchivo)) {
        // Lee el contenido del archivo
        const contenido = fs.readFileSync(rutaArchivo, 'utf-8');
        
        // Envía el contenido como respuesta
        res.send(`
        <h1>Contenido de <b style="color: blue">${nombre}.txt</b>:</h1>
        <br>
        <span style="font-size:20px;">
        ${contenido}
        </span>
        `);
    } else {
        res.send(`El archivo ${nombre}.txt no existe en la carpeta ${carpetaArchivos}.`);
    }
};

