module.exports = fibonacci = (n) => {
  // jika n panjang nya 1 return 0
  if (n === 1) {
    return "0";
  }
  // jika n panjangnya 2 return 0 1
  let fibonacciArray = [],
    i = 0,
    j = 1;
  fibonacciArray.push(i);
  fibonacciArray.push(j);
  while (fibonacciArray.length < n) {
    fibonacciArray.push(fibonacciArray[j] + fibonacciArray[i]);
    j++;
    i++;
  }
  return fibonacciArray.join(" ");
};
