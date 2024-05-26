export const reverseArray = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  let temp;

  while (arr[i] < arr[j]) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
};

console.log(reverseArray([2, 5, 6, 8, 4]));
