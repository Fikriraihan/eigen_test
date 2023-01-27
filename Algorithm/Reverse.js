let words = "NEGIE1";

var wordsSplit = words.split("");
wordsSplit.pop();

var reverseWords = wordsSplit.reverse();
reverseWords.push("1");

const results = reverseWords.join("");
console.log(results);
