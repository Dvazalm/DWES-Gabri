import express from 'express';
import * as controller from './controller.js';


const port = 3000;

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.get('/header', controller.headersController);
server.get('/query', controller.queryController);
server.get('/param/:name', controller.paramController);
server.get('/body', controller.bodyController);


const animals = express.Router();

server.use('/animals', animals)
animals.get((req, res) => {
    res.send('Choose an animal');
})
animals.get('/dog', (req, res) => {
    res.json({ "grow": "guau guau" });
})
animals.get('/cat', (req, res) => {
    res.json({ "grow": "miau" });
})
animals.get('/bird', (req, res) => {
    res.json({ "grow": "pio pio" });
});

//EJER6
server.use('*', (req, res) => {
    res.status(404).json({
        code: 404,
        error: "Not Found",
        message: "Error: Path not found"
    });
});


server.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}`)
});
