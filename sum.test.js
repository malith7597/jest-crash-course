const sum = require("./sum");
const myFunction = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("null is falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
});

test("throws an invalid input", () => {
  expect(() => {
    myFunction("a");
  }).toThrow();
});
