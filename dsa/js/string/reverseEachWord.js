let str = "Welcome to this Javascript Guide";

function reverseEachWord(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }

  return reverseStr;
}
console.log(reverseEachWord(str));
