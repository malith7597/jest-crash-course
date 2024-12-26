function sum(a, b) {
  return a + b;
}

function myFunction(input) {
  if (typeof input !== "number") {
    throw new Error("invalid input");
  }
}

module.exports = sum;
