// index.js en la raíz del directorio src
import mongodbLoader  from './mongobd-loader.js';
import expressLoader from './express-loader.js';

export function init(server, config){
    expressLoader(server);
    mongodbLoader(config.database);
}
