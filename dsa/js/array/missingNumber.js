function missingNumber(arr) {
  const missingNumber = [];

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i + 1] - arr[i]) > 1) {
      missingNumber.push(arr[i + 1] - 1);
    }
  }

  if (missingNumber.length === 0) {
    return { msg: "There are no missing numbers" };
  }

  return missingNumber;
}
console.log(missingNumber([11, 12, 14, 15, 16, 17, 18, 19, 20]));
