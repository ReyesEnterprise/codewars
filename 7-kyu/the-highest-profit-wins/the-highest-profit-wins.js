function minMax(arr){
  const big = Math.max(...arr);
  const small = Math.min(...arr); 
  return [small, big]; 
}