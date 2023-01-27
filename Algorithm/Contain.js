function Contain(params) {
  let input = ["xc", "dz", "bbb", "dz"];
  let query = ["bbb", "ac", "dz"];
  let arr = 0;

  for (let index = 0; index < query.length; index++) {
    if (query[index] === input[index]) {
      arr += 1;
    }
    return arr;
  }
  console.log(arr);
}
