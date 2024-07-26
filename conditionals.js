function testNumbers(number) {
  let result;
  if (number > 0) {
    result = "number is positive";
  } else if (number < 0) {
    result = "number is negative";
  } else {
    result = "number is zero";
  }
  return result;
}

let number = 0;
const result =
  number > 0
    ? "number is positive"
    : number < 0
      ? "number is negative"
      : "number is zero";

console.log(testNumbers(0)); // Should print "number is zero"
console.log(result); // Should also print "number is zero"
