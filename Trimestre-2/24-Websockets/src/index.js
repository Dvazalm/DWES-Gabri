import app from './app.js';
import config from './config.js';
import { Server } from 'socket.io';


const { port } = config;

const server = app.listen(port, () => {
    console.log(`Server listen from ${port}`)
});


const io = new Server(server);

io.on('connection', (socket) => {

    socket.emit(`single`, `para uno`);
    io.emit(`all`, `conectado`);
    socket.on(`echo`,(data) => {
        console.log(data);
        io.emit('all', data);
      
    });




    console.log(`A user has connected`);
    socket.on(`disconnect`,() =>{
        console.log(`A user has disconnected`);
    });
    

    

    

});
