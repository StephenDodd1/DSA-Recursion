let startArr = [1, 1];
//This function requires startArr to be plugged in for arr
fibonacciNums = (num, arr) => {
  if (num > 2) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return fibonacciNums(--num, arr);
  } else return arr;
};
