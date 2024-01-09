function oddishOrEvenish(num) {
    
    
    //Esta funcion la añadi yo para hecer mas "bonito" el resultado por consola
    function separarNumParaResultado(num) {
        let numeroSeparado = num.toString();
        let stringNum = "";

        for (let i = 0; i < numeroSeparado.length; i++) {
            stringNum += parseInt(numeroSeparado[i], 10);
            // Evitar poner el último "+"
            if (i < numeroSeparado.length - 1) {
                stringNum += ` + `;
            }
        }
        return stringNum;
    }


    //Aqui empieza el codigo integro que el ejeercicio pide
    let numeroSeparado = num.toString();
    let suma = 0;

    //Suma de los numeros
    for (let i = 0; i < numeroSeparado.length; i++) {
        suma += parseInt(numeroSeparado[i]);
    }
    
    //Comparar si son par o impar
    if (suma % 2 !== 0) {
        console.log(`El numero seleccionado es: ${num}\nLa suma es: ${separarNumParaResultado(num)}\nEl resultado de la suma es: ${suma} \nEl resultado del ejercicio es: Oddish`);
        return `Oddish`;
        
    } else {
        console.log(`El numero seleccionado es: ${num}\nLa suma es: ${separarNumParaResultado(num)}\nEl resultado de la suma es: ${suma} \nEl resultado del ejercicio es: Evenish`);
        return `Evenish`;
    }
}

//genera un número aleatorio del array de ejemplos
const arrayDeEjemplos = [11, 12, 5789, 1238, 49234, 4230];
const numeroElegido = arrayDeEjemplos[Math.floor(Math.random() * arrayDeEjemplos.length)];

oddishOrEvenish(numeroElegido);
