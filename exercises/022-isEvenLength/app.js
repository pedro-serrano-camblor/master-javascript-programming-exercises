function isEvenLength(word) {
    // your code here
    let wordCount = word.length
    if (wordCount % 2 === 0) { return true; }
    else { return false; }
}

console.log(isEvenLength("holaa"));// Write your function here