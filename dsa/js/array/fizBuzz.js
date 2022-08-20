//  1-100 fiz
// 3 : Fiz
// 5 : Buzz
// 3 & 5:- FizBuzz

function log() {
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizBuzz");
    } else if (i % 3 === 0) {
      console.log("Fiz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    }
    console.log(i);
  }
}

log();
