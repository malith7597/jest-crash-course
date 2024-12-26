export function max(a, b) {
  return a > b ? a : b;
}

export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  }
  if (n % 3 === 0) {
    return "Fizz";
  }
  if (n % 5 === 0) {
    return "Buzz";
  }
  return n.toString();
}

export function calculateFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}
