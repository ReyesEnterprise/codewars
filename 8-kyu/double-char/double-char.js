function doubleChar(str){
  let word = "" ;
  
  for(let i = 0; i < str.length; i++){
    word += (str[i]) + (str[i]); 
  }
  return word; 
}
​
​
console.log(doubleChar("hello"));