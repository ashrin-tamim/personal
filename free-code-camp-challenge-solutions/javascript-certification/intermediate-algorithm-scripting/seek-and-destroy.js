function destroyer(arr, ...numbers) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (arr[i] == numbers[j]) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  return arr;
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
