import { constrainedMemory } from "process";

//EJER 1
export function headersController(req, res) {
    const token = req.headers.token;
    res.status(200).send(token);
    console.log("token:", token);
};  

//EJER 2
export function paramController(req, res) {
    const { name } = req.params;
    res.send(`Hola ${name}`);
}; 

//EJER 3
export function queryController(req, res) {
    const n = parseInt(req.query.n);

    if (isNaN(n) || n < 1) {
        res.status(400).send('Dame un numero mayor a 0');
    } else {
        const sum = (n * (n + 1)) / 2;
        res.send(`La suma de 1 y ${n} = ${sum}`);
    }
};

//EJER4
export function bodyController(req, res) {
    const body = Object.entries(req.body).map(([key, value]) => `<li><b>${key}</b>: ${value}</li>`);
    res.send(`<ul>${body.join('')}</ul>`);
}; 

//EJER