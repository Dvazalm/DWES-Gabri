import express from 'express';
import winston from 'winston';
import morgan from 'morgan';

const server = express();
const userRouter = express.Router();
const port = 3000;
server.use(morgan('tiny'));

/* middlewires */
function printDateMiddleware(req, res, next) {
    console.log(`[${new Date().toISOString}] ${req.method}: ${req.path}`);
    console.log('hola mundo!');
    next();
};

/* Controller */
function pingController(req, res) {
    console.log('pong');
    res.send('pong');
}

function getUser(req, res) {
    res.send({ name: 'Jose Antonio' });
}

function postUser(req, res, next) {
    try {
        throw new Error('fasho');
    } catch (err) {
        next(err);
    }
}
server.use(('[pu]*'), printDateMiddleware);
server.use(userRouter);

/* Route + Controller */
server.get('/ping', printDateMiddleware, pingController);
userRouter.get('/user', getUser);
userRouter.post('/user', postUser);

server.use(printMiddleware, userRouter)

/* winston */

const { format } = winston;

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: format.combine(
                format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss',
                }),
                format.colorize(),
                format.printf((info) => `[${[info.timestamp]}] (\u001B[32m${info.level}\u001B[0m) ${info.message}`),
            ),
        }),
    ],
});


logger.stream = {
    write(message) {
        logger.info(message);
    },
};

morgan.format('combined', '(routes) [:method] :status :url');
server.use(morgan('combined', {
    skip(req, res) {
        return res.statusCode >= 400;
    },
    stream: logger.stream,
}));


// EJER 1
server.use((err, req, res, next) => {
    const { status = 500, message } = err;
    if (status >= 500) {
        logger.error(`Error: ${status} - ${message}`);
    } else if (status >= 400) {
        logger.warn(`Warning: ${status} - ${message}`);
    } else {
        logger.info(`Info: ${status} - ${message}`);
    }
    res.status(status).send(status >= 500 ? 'Server Error' : message);
});

// EJER 2

function validateAccessMiddleware(req, res, next) {
    const password = req.header('password');

    if (password === 'patata') {
        next();
    } else {
        const error = new Error('Acceso restringido, por favor, incluya la palabra secreta en el parámetro "password" en la cabecera de la petición');
        error.status = 401;
        next(error);
    }
};

server.get('/zona-restringida', validateAccessMiddleware, (req, res) => {
    res.status(200).send('Bienvenid@, disfrute de las lentejas de la abuela Charo');
});


server.listen(port, () => {
    console.log(`servidor escchando por puerto ${port}`)
});