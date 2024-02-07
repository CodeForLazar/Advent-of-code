const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');
const formatData = [];

let index = 0;
for (let i = 0; i < data.length; i++) {
   const char = data[i];
   if (!char) {
      index++;
      continue;
   }
   formatData[index] = (formatData[index] || '') + char;
}

exports.firstStar = () => {
   let sum = [];

   for (let i = 0; i < formatData.length; i++) {
      const group = formatData[i];
      let uniqueCharacters = new Set(group);
      sum.push(uniqueCharacters.size);
   }

   sum = sum.reduce((acc, num) => acc + num, 0);

   console.log('DaySix-PartOne', sum);
};

exports.secondStar = () => {
   let sum = [];

   console.log('DaySix-PartTwo', sum);
};
