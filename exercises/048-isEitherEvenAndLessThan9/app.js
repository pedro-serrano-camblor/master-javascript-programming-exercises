function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    if ((num1 % 2 === 0 || num2 % 2 === 0) && (num1 < 9 && num2 < 9)) {
        let output = true;
        return output;
    } else {
        let ouput = false;
        return ouput;
    }
}

let output = isEitherEvenAndLessThan9(72, 10);
console.log(output); // --> true
