// Write your function here
let input = [1, 2, 3, 4, 5];

function computeAverageOfNumbers(array) {

    let resultadoSuma = 0

    if (array.length === 0) {
        return 0
    } else {
        for (let index = 0; index < array.length; index++) {

            resultadoSuma += array[index];
        }
    }



    let output = resultadoSuma / array.length
    return output

}

let output = computeAverageOfNumbers(input);
console.log(output); //