function XO(str) {
  let xCount = 0;
  let oCount = 0;
​
  for (let char of str.toLowerCase()) {
    if (char === 'x') xCount++;
    if (char === 'o') oCount++;
  }
​
  return xCount === oCount;
}
​