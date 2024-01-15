import app from './app.js';
import config from './config.js';
import { Server } from 'socket.io';


const { port } = config;

const server = app.listen(port, () => {
    console.log(`Server listen from ${port}`)
});

import { getPosts } from './services/jph-service.js';
const posts = await getPosts();
console,log(posts);