function removeFromFront(arr) {
    // your code here
    let eliminoElemento = arr.shift()
    return arr
}

let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
