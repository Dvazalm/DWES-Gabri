import mongodbLoader from 'mongoose';
import expressLoader from './express-loader.js';

export function init(server, config){
    expressLoader(server);
    mongodbLoader(config.database);
}
