function getProperty(obj, key) {
  // your code here
  return obj[key];
}

let persona = {
  nombre: 'Pedro'
};

let output = getProperty(persona, 'nombre');
console.log(output);