const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

exports.firstStar = () => {
   let sum = [];
   for (let i = 0; i < data.length; i++) {
      const mass = +data[i];
      const gas = Math.floor(mass / 3) - 2;
      sum.push(gas);
   }
   sum = sum.reduce((acc, num) => acc + num, 0);
   console.log('DayOne-PartOne', sum);
};

exports.secondStar = () => {
   let sum = [];
   for (let i = 0; i < data.length; i++) {
      let mass = +data[i];

      while (Math.floor(mass / 3) - 2 > 0) {
         mass = Math.floor(mass / 3) - 2;
         sum.push(mass);
      }
   }
   sum = sum.reduce((acc, num) => acc + num, 0);
   console.log('DayOne-PartTwo', sum);
};
