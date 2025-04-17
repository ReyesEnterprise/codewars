function deleteNth(arr, n) {
  const result = [];
  const counts = {};
​
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    counts[num] = (counts[num] || 0) + 1; // increment count or start with 1
​
    if (counts[num] <= n) {
      result.push(num);
    }
  }
​
  return result;
}