const fs = require('fs');
const typePriority = require('./TypePriority');

const checkPack = (pack) => {
  for (let pouch1Item = 0; pouch1Item < pack.length / 2; pouch1Item++) {
    for (let pouch2Item = pack.length / 2; pouch2Item < pack.length; pouch2Item++) {
      if (pack[pouch1Item] === pack[pouch2Item]) return pack[pouch1Item];
    };
  };
};

const checkGroup = (packList) => {

}

const getItemPriority = (item) => {
  let returnValue = 0;
  typePriority.forEach((itemType, index) => {
    if (item === itemType) returnValue = Number(index) + 1;
  })
  return returnValue;
};

// Main execution
const packList = fs.readFileSync('input.txt')
  .toString()
  .split('\n');

let sumOfIncorrectItems = 0;  

packList.forEach((pack, index) => {
  console.log(`Pack ${index}: ${getItemPriority(checkPack(pack))}`)
  sumOfIncorrectItems += getItemPriority(checkPack(pack));
})

for (i=0; i < 3; i++) {
  
}

console.log(`Part 1 - Sum of Incorrect Item Priorities: ${sumOfIncorrectItems}`);