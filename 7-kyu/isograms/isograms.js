function isIsogram(str) {
  const lowerStr = str.toLowerCase();
  const letters = new Set();
​
  for (let char of lowerStr) {
    if (letters.has(char)) {
      return false;
    }
    letters.add(char);
  }
​
  return true;
}