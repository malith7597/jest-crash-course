import { describe, test, it, expect } from "vitest";
import { max, fizzBuzz, calculateFactorial } from "../src/intro";

describe("max", () => {
  //should match the AAA pattern
  // Arrange
  const a = 1;
  const b = 2;
  // Act
  const result = max(a, b);
  // Assert
  it("should return the greater of two numbers", () => {
    expect(result).toBe(b);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz for multiples of 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Fizz for multiples of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("should return Buzz for multiples of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("should return the number as a string for all other numbers", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});

describe("calculateFactorial", () => {
  it("should return 1 for 0", () => {
    expect(calculateFactorial(0)).toBe(1);
  });

  it("should return the factorial of a number", () => {
    expect(calculateFactorial(5)).toBe(120);
  });
});
