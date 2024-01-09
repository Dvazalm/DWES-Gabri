let textoEjemplo = [`foca`,`xokas`,`saxofon`,`oxxo`,`kamaron :D`, `cambianos lax xillas de la claxe porfi, que tengo la expalda como una tabla de madera x-(`];
    
let textoSeleccionado = textoEjemplo[Math.floor(Math.random() * textoEjemplo.length)];

    let cantidadDeX = (textoSeleccionado.match(/x/g) || []).length;
    let cantidadDeO = (textoSeleccionado.match(/o/g) || []).length;
   
let resultado = ``;

    if(cantidadDeX === cantidadDeO){
        resultado = `TRUE`;
    }else{
        resultado = `FALSE`;
    }

console.log(`\nLa palabra "${textoSeleccionado}" contiene:\n${cantidadDeX} - X\n${cantidadDeO} - O\nEl resultado es: ${resultado}\n\n`)


