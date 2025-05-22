function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  let word1Length = word1.length;
  let word2Length = word2.length;
  let word3Length = word3.length;
  let wordSum = word1Length + word2Length + word3Length;
  return wordSum;
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
