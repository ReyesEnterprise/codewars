function order(words) {
  if (!words) return "";
  
  return words
    .split(" ")
    .sort((a, b) => {
      const numA = a.match(/\d/);
      const numB = b.match(/\d/);
      return numA - numB;
    })
    .join(" ");
}
​