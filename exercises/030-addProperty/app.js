function addProperty(obj, key) {
  // your code here
  obj[key] = true
  return obj
}

let myObj = {
  myProperty: 'casa'
};
addProperty(myObj, 'myProperty');

console.log(myObj.myProperty);