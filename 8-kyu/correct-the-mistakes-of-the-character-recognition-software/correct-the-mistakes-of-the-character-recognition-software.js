function correct(string) {
  const word = string.split(""); // Convert string to an array of characters
​
  return word.map(letter => { // Use map to transform the array
    switch (letter) {
      case "0": // Fix: Case values should be strings
        return "O";
      case "1":
        return "I";
      case "5":
        return "S"
      default:
        return letter; // Return the original letter if no replacement is needed
    }
  }).join(""); // Convert the array back into a string
}
​
​