function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(sheep => sheep === true).length;
}