const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n')[0];

exports.firstStar = () => {
   let sum = 0;

   for (let i = 0; i < data.length; i++) {
      const char = data[i];
      const char2 = data[i + 1];
      const char3 = data[i + 2];
      const char4 = data[i + 3];

      let fourChar = [char, char2, char3, char4];
      let unique = {};

      for (const charr of fourChar) {
         unique[charr] = (unique[charr] || 0) + 1;
      }

      let foundMark = Object.values(unique).every((num) => num === 1);
      if (foundMark) {
         sum = i + 4
         break
      }

   }

   console.log('DaySix-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DaySix-PartTwo', sum);
};
