// To sort the array there are multiple Algos are available.

// 1) Bubble Sort: Select Adjustment element & Compare right < left ? Swap
// 2) Selection Sort: Slowest Find the minimum number in the array & Swap with beginning of the array.
// 3) Quick Sort:
// 4) Heap Sort:
// 5) Insertion Sort:
// 6) Merge Sort:

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp;
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
console.time();
console.log(selectionSort([10, 9, 7, 8, 1, 5, 4, 2, 3, 6]));
console.timeEnd();

// function bubbleSort(arr) {}
// console.log(bubbleSort([10, 9, 7, 8, 1, 5, 4, 2, 3, 6]));
