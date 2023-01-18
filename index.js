'use strict'
function solveEquation(a, b, c) {
  let result = [];
  let discriminant = (Math.pow(b, 2)) - (4 * a * c);
  if (discriminant === 0) {
    result = [`${-b / (2 * a)}`];
  } else if (discriminant > 0) {
    result = [`${(-b + Math.sqrt(d)) / (2 * a)}, ${(-b - Math.sqrt(d)) / (2 * a)}`];
  } else {
    return result
  }
  concole.log(result)
}

solveEquation(8, 2, 3)