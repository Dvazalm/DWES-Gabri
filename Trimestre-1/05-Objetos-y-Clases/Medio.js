function invert(objeto) {

	return Object.fromEntries(
		Object.entries(objeto).map(arr => arr.reverse())
	);
}


  const objetoOriginal = {
    "z": "q",
    "w": "f"
};

  const objetoInvertido = invert(objetoOriginal);
  

  //RESULTADO
  console.log(`Objeto original:`, objetoOriginal, `\nObjeto invertido:`, objetoInvertido);