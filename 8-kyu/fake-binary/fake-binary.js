function fakeBin(str) {
  return str
    .split('') 
    .map(num => (num < '5' ? '0' : '1')) 
    .join(''); 
}