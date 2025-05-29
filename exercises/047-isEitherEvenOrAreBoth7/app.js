function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    if (num1 % 2 === 0 || num2 % 2 === 0 || num1 && num2 === 7) {
        let output = true;
        return output;
    } else{
        let ouput = false;
        return ouput;
    }
}

let output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

/* let output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true */