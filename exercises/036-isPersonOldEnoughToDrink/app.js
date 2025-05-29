function isPersonOldEnoughToDrink(person) {
  // Add your code after this line
  if (person.age >= 21) {
    let output = true;
    return output;
  } else {
    let output = false;
    return output;
  }
}

let obj = {
  age: 16
};
let output = isPersonOldEnoughToDrink(obj);
console.log(output); //