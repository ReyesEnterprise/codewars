function findAverage(array) {
  if (array.length === 0) return 0; 
​
  const sum = array.reduce((previousValue, item) => {
    return previousValue + item;
  }, 0); 
​
  return sum / array.length; 
}