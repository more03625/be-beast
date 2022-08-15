let counter = 0;
const getData = () => {
  console.log("Fetching data", counter++);
};

function debounce(fn, d) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  };
}

const betterFunction = debounce(getData, 300);
