function rentalCarCost(d) {
 let price = 40; 
 let updatedPrice = price * d;
  
  if(d >= 7 ){
     updatedPrice = (price * d) - 50
  }else if (d >= 3) {
     updatedPrice = (price * d) - 20
  }
  return updatedPrice ; 
}