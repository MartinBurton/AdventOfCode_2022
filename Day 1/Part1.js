const fs = require('fs');

const inputData = fs.readFileSync('./input.txt')
  .toString()
  .split('\n');

let max = 0;
let sum = 0;

inputData.forEach((value) => {
  if (value != '') {
    sum += Number(value);
  } else {
    if (sum > max) {
      max = sum;
    }
    sum = 0;
  };
});

console.log(`Total Calories: ${max}`);