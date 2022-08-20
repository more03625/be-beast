function isPresent(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return { msg: `Number found at position ${i}` };
    }
  }
  return { msg: "Number not found in the array!" };
}

console.log(isPresent([7, 8, 9, 6, 5, 3, 2, 4], 99));
