  function isPangram(string){
   const lowerCase = string.toLowerCase()
   const letters = new Set();
   for (const char of lowerCase){
     if (char >= 'a' && char <= 'z') {
          letters.add(char);
      }
   }
     
   if (letters.size === 26) {
     return true;
   } else {
     return false;
   } 
 }
​
​
console.log(isPangram("The quick brown fox jumps over the lazy dog"));
     