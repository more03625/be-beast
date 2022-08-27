function swap(arr, i, j) {
  let temp;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  return arr;
}
function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j + 1, j);
      }
    }
  }
}

function findMinMax(arr, min, max) {
  sort(arr);
  console.log(arr, min, max);

  const obj = { min: arr[min], max: arr[arr.length - max] };

  return obj;
}
console.log(findMinMax([6, 7, 8, 3, 2, 4, 10, 12, 100, 1], 2, 2));
