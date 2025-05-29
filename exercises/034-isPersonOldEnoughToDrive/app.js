function isPersonOldEnoughToDrive(person) {
  // Add your code after this line
  if (person.age >= 16) {
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
let output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true