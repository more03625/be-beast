function asciiCode(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string.charCodeAt(i));
  }
}
// asciiCode("rahulmore");



function nonDivisibleSubset(k, s) {
  // https://www.hackerrank.com/challenges/non-divisible-subset/problem
  if (k == 0 || k == 1) {
    return 1
  }
  const ma = {};
  let final = 0;
  s.forEach(x => {
    let val = (ma[x % k] ? ma[x % k] + 1 : 1);
    ma[(x % k).toString()] = val;
  });
  Object.keys(ma).forEach((x, i) => {
    let oppositeValue = ma[k - Number(x)] || 0;
    if (ma[x] > oppositeValue && Number(x) != 0) {
      final += ma[x];
    } else if (Number(x) == (k - Number(x)) || Number(x) == 0) {
      final += 1;
    }
  });
  return final;
}
console.log(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]));
