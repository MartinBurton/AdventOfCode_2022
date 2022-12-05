const fs = require('fs');

const inputData = fs.readFileSync('./input.txt')
  .toString()
  .split('\n');

let max1 = 0, max2 = 0, max3 = 0, sum = 0;

inputData.forEach((value) => {
  if (value != '') {
    sum += Number(value);
  } else {
    if (sum > max1) {
      max3 = max2;
      max2 = max1;
      max1 = sum;
    } else if (sum > max2) {
      max3 = max2;
      max2 = sum;
    } else if (sum > max3) {
      max3 = sum;
    };
    sum = 0;
  };
});

console.log(`Total of top 3: ${max1 + max2 + max3}`);