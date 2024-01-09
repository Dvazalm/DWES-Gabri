/*==================== IMPORTS ====================*/
//exprexx
import express from 'express';
//config
import * as config from './config.js'
//Controller
import * as mainControler from './controller/main-controller.js';
import * as documentController from './controller/note-controller.js';
//middleware
import { errorController, errorControlerRute } from './middleware/error-middleware.js';


/*==================== EXPRESS ====================*/
const server = express();


/*==================== RUTES ====================*/
// Menu principal
server.get('/', mainControler.pingController);
server.get('/nota', mainControler.pingController);

// Funciones
server.post('/nota/crear/:nombre', documentController.crearDocumentoController);
server.delete('/nota/eliminar/:nombre', documentController.eliminarDocumentoController);
server.get('/nota/lista', documentController.verArchivosController);
server.get('/nota/ver/:nombre', documentController.verDocumentoController);



/*==================== MIDDLEWARE ====================*/
server.use(errorController); //Errores
server.use(errorControlerRute); //Error de Ruta


/*==================== Servidor ====================*/
  server.listen(config.port, () => {
      console.log(`Servidor escuchando por el puerto ${config.port}`);
  });