function isOddLength(word) {
    // your code here
    let wordCount = word.length
    if (wordCount % 2 !== 0) { return true; }
    else { return false; }
}

console.log(isOddLength("holaa"));