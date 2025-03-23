function nbDig(n, d) {
  let count = 0;
  
  for (let k = 0; k <= n; k++) {
    let squared = (k * k).toString(); 
    count += squared.split(d).length - 1; 
  }
​
  return count;
}
​