function calculateYears(P, I, T, D) {
  let years = 0; 
​
  while (P < D) { 
    let interest = P * I; 
    let netInterest = interest * (1 - T); 
    P += netInterest; 
    years++; 
  }
​
  return years; 
}