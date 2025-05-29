function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  if (person.age >= 18) {
    let output = true;
    return output;
  } else {
    let output = false;
    return output;
  }
}

let obj = {
  age: 19
};
let output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true