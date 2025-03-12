function squareDigits(num){
  let digitsArray = num.toString().split('').map(Number);
  
  let squardArray = digitsArray.map( function (item ){
      return item * item;
  });
  return Number(squardArray.join(""));
}