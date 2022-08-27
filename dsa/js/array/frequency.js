function findFrequency(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      count++;
    }
  }
  return count;
}

const arr = [1, 3, 3, 4, 5, 3, 6, 3];
const valueToFind = 3;
console.log(
  `Frequency of ${valueToFind} is ${findFrequency(arr, valueToFind)}`
);

// https://www.woorank.com/en/edu/seo-guides/xml-sitemaps
