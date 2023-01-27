function longestWord(string) {
  let stringg = string.split(" ");
  let longest = 0;
  let longest_word = "";
  for (let i = 0; i < stringg.length; i++) {
    if (longest < stringg[i].length) {
      longest = stringg[i].length;
      longest_word = `${stringg[i]} : ${stringg[i].length} characters`;
    }
  }
  return longest_word;
}

console.log(longestWord("Saya sangat senang mengerjakan soal algoritma"));
