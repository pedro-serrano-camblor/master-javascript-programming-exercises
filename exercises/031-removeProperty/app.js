function removeProperty(obj, key) {
  obj[key] = undefined
  return obj
  
}

let obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name);