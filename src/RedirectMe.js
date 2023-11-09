function countEvenNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}


countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 5