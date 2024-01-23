import expressLoader from './express-loader.js';
import mongobdLoader from './mongobd-loader.js';

export function init(server, config){
    expressLoader(server);
    mongobdLoader(config.database);
}

