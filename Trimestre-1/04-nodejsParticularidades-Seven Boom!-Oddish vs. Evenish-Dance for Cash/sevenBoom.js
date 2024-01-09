function sevenBoom(arr) {

    //Pasar el array seleccionado a un String
    const arraySeparado = arr.toString();

    //Ver si contiene el numero 7
    if (arraySeparado.includes(7)) {
        return "Boom!";
    } else {
        return "there is no 7 in the array";
    }
}


const arraysDeEjemplos = [[1, 2, 3, 4, 5, 6, 7], [8, 6, 33, 100], [2, 55, 60, 97, 86]];

const numerosSeleccionados = arraysDeEjemplos[Math.floor(Math.random() * arraysDeEjemplos.length)]
// Ejemplos

console.log(`El array seleeccionado es: ${numerosSeleccionados}.\nY el resultado es: `, sevenBoom(numerosSeleccionados)); 
