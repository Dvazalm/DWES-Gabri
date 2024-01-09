function keysAndValues(obj) {
    const keys = Object.keys(obj).sort();
    const result = keys.map(key => [key, obj[key]]);
    
    return result;
  }

  
let objeto = {
    a: 1,
    b: 2,
    c: 3,
}

console.log(keysAndValues(objeto));