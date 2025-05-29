function computeAverageLengthOfWords(word1, word2) {
    // your code here
    let word1Count = word1.length;
    let word2Count = word2.length;
    let wordsCount = word1Count + word2Count
    return ((word1Count + word2Count) / 2);
}

console.log(computeAverageLengthOfWords("hola", "mundos"));