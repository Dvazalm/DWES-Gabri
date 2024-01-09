import express from 'express';

const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.get('/', (req, res) => {
    res.send(menuPrincipal())
});

app.get('/NuevaPartida', (req, res) => {
    res.send(nuevaPartida())
});

app.get('/reglas', (req, res) => {
    res.send(menuReglas())
});

app.get('/jugar', (req, res) => {
    if (nombreGanador != "") {
        res.send(ganador())
    } else {
        res.send(empezarJuego())
    }
});

app.get('/jugar/tirarDado', (req, res) => {
    if (nombreGanador != "") {
        res.send(ganador())
    } else {
        res.send(tirarDado())
    }
});

app.get('/jugar/ganador', (req, res) => {
    res.send(ganador())
});

const urltablero = 'https://aprenderenfamiliablog.files.wordpress.com/2021/04/instrucciones-como-jugar-a-la-oca.jpg?w=792';
let posicionJugador = 1;
let posicionIA = 1;
let turno = 0; //Esto se usa en lanzarDados
let nombreGanador = "";
let numeroCasillasNegativaJuagdor = 0;
let numeroCasillasNegativaIA = 0;



function empezarJuego() {
    let texto = '';
    texto += '<h1>LA OCA</h1><hr>';

    texto += '<li style="color:red;"><a href="http://localhost:3000/">VOLVER</a></li>';
    //POSICIONES

    texto += "<h2>Posiciones</h2>";


    texto += `<p style="font-size:30px">🔰 Tu posicion es la casilla: <b>${posicionJugador}</b></p>`;
    texto += `<p style="font-size:30px">🔺 La posición de la IA es la casilla: <b>${posicionIA} </b></p>`;

    //MENU
    texto += "<h2>NENÚ</h2>";
    texto += '<li style="font-size:20px; color:green;"><a href="http://localhost:3000/jugar/tirarDado">Tirar Dado</a></li><br><br>';

    
    texto += `<img src='${urltablero}' style="width:500px;">`;
    return texto;
};

function nuevaPartida(){
    posicionIA = 0;
    posicionJugador = 0;
    turno = 0;
    nombreGanador = "";

    return empezarJuego();
};

function tirarDado() {

    let texto = '';
    let numeroAleatorioJugador = 1;
    let numeroAleatorioIA = 1;


    if (turno % 2 === 0) {
        numeroAleatorioJugador = Math.floor(Math.random() * 6) + 1;
        posicionJugador = posicionJugador + numeroAleatorioJugador;

        texto += '<h1>LA OCA</h1><hr>';

        texto += '<h2>SE HAN LANZADO LOS DADOS</h2>';
        texto += `<li style="font-size:20px">🔰 A el jugador le ha salido el número: ${numeroAleatorioJugador}</li><br>`;
        if (posicionJugador == 63) {
            nombreGanador = "jugador"
        }else if(posicionJugador > 63){
            numeroCasillasNegativaJuagdor = 0;
            numeroCasillasNegativaJuagdor = posicionJugador - 63;
            posicionJugador = 63 - numeroCasillasNegativaJuagdor;
            numeroCasillasNegativaJuagdor = 0;
        };

        //DETECTAR CASILLAS ESPECIALES
        switch (posicionJugador) {
            case 5:
                texto += '<p style="color:green">Casilla 5: “La Oca”. El jugador avanza a la casilla 9.</p>';
                posicionJugador = 9;
                break;
            case 6:
                texto += '<p style="color:green">Casilla 6: “Puente”. El jugador avanza a la casilla 12.</p>';
                posicionJugador = 12;
                break;
            case 9:
                texto += '<p style="color:green">Casilla 9: “La Oca”. El jugador avanza a la casilla 14.</p>';
                posicionJugador = 14;
                break;
            case 12:
                texto += '<p style="color:orange">Casilla 12: “Puente”. El jugador retrocede a la casilla 6.</p>';
                posicionJugador = 6;
                break;
            case 58:
                texto += '<p style="color:red">Casilla 58: “La muerte”. El jugador retrocede a la casilla 1.</p>';
                posicionJugador = 1;
                break;
            default:
                texto += '<p>El jugador no cae en ninguna casilla especial.</p>';
        }


    } else {
        numeroAleatorioIA = Math.floor(Math.random() * 6) + 1;
        posicionIA = posicionIA + numeroAleatorioIA;

        texto += '<h1>LA OCA</h1><hr>';

        texto += '<h2> La IA HA LANZADO LOS DADOS</h2>';

        texto += `<li style="font-size:20px">🔺A la IA le ha salido el número: ${numeroAleatorioIA}</li><br>`;

        
        if (posicionIA == 63) {
            nombreGanador = "IA"
        }else if(posicionIA > 63){

            numeroCasillasNegativaIA = posicionIA - 63;
            posicionIA = 63 - numeroCasillasNegativaIA;
            numeroCasillasNegativaIA = 0;
        };
        //DETECTAR CASILLAS ESPECIALES
        switch (posicionIA) {
            case 5:
                texto += '<p style="color:green">Casilla 5: “La Oca”. La IA avanza a la casilla 9.</p>';
                posicionIA = 9;
                break;
            case 6:
                texto += '<p style="color:green">Casilla 6: “Puente”. La IA avanza a la casilla 12.</p>';
                posicionIA = 12;
                break;
            case 9:
                texto += '<p style="color:green">Casilla 9: “La Oca”. La IA avanza a la casilla 14.</p>';
                posicionIA = 14;
                break;
            case 12:
                texto += '<p style="color:orange">Casilla 12: “Puente”. La IA retrocede a la casilla 6.</p>';
                posicionIA = 6;
                break;
            case 58:
                texto += '<p style="color:red">Casilla 58: “La muerte”. La IA retrocede a la casilla 1.</p>';
                posicionIA = 1;
                break;

            default:
                texto += '<p>La IA no cae en ninguna casilla especial.</p>';
        }

   
       
    }; 
    
    turno = turno + 1;
    texto += '<br><br><br><br><br><a href="http://localhost:3000/jugar/"><h1>SIGUIENTE</a></h1>';
    return texto;
};

function ganador() {
    if(nombreGanador == "jugador"){
        let texto = '';
        texto += '<h1>LA OCA</h1><hr>';

        texto += '<li style="color:red;"><a href="http://localhost:3000/">VOLVER</a></li>';
        texto += '<h2>¡FELICIDADES!</h2>';
        texto += '<h2>¡Eres el ganador!</h2>';
        texto += "br> <img src='https://i.makeagif.com/media/6-24-2021/Pk6ukY.gif'></img>";  
        return texto;
    }else if(nombreGanador == "IA"){
        let texto = '';
        texto += '<h1>LA OCA</h1><hr>';

        texto += '<li style="color:red;"><a href="http://localhost:3000/">VOLVER</a></li>';
        texto += '<h2>PERDISTE 😢</h2>';
        texto += '<h2>Mala suerte, prueba otra vez</h2>';
        texto += "br> <img src='https://media.tenor.com/JikaSIaiY7gAAAAC/cara-amarilla-muriendo.gif'></img>";  
        return texto;
    }else{
        return "<h1>Si lees esto antes de tiempo es por que eres un impacieente, ahora te comes in RickRoll</h1> <br> <img src='https://media.tenor.com/_4YgA77ExHEAAAAC/rick-roll.gif'>";
    }
};


function menuPrincipal() {
    let texto = '';
    texto += '<h1>LA OCA</h1><hr>';

    texto += '<h2>MENÚ PRINCIPAL</h2>';

    texto += '<li style="font-size:20px"><a href="http://localhost:3000/NuevaPartida">NUEVA PARTIDA</a></li> <br><br>';
    texto += '<li style="font-size:20px"><a href="http://localhost:3000/jugar">SEGUIR CON LA ULTIMA PARTIDA</a></li>';
    texto += '<li style="font-size:20px"><a href="http://localhost:3000/reglas">REGLAS</a></li>';

    return texto;
};








function menuReglas() {
    let texto = '';
    texto += '<h1>LA OCA</h1><hr>';

    texto += '<li style="color:red;"><a href="http://localhost:3000/">VOLVER</a></li>';

    texto += '<h2>REGLAS</h2>';

    texto += '<p style="width:500px">';

    texto += 'El juego de la Oca es un juego de mesa tradicional español que se juega con un tablero circular que consta de 63 casillas. El objetivo del juego es mover tus fichas desde la casilla de inicio hasta la casilla final, que generalmente se encuentra en el centro del tablero.';
    texto += '<br><br><br>'
    texto += '<b>Existen algunas casillas especiales, pero en nuestro caso, solo vamos a tener en cuenta 4 de ellas:</b>';
    texto += '<li>Casilla 5: “La Oca”. El jugador avanza a la casilla 9.</li>'
    texto += '<li>Casilla 6: “Puente”. El jugador avanza a la casilla 12.</li>'
    texto += '<li>Casilla 9: “La Oca”. El jugador avanza a la casilla 14.</li>'
    texto += '<li>Casilla 12: “Puente”. El jugador retrocede a la casilla 6.</li>'
    texto += '<li>Casilla 58: “La muerte”. El jugador retrocede a la casilla 1.</li>'

    texto += '</p>';

    return texto;
};

