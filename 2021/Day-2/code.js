const fs = require('fs');
const path = require('path');

const data = fs
   .readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
   .split('\r\n')
   .map((row) => row.split(' '));

exports.firstStar = () => {
   let sum = 0;
   let forward = 0;
   let depth = 0;

   for (let o = 0; o < data.length; o++) {
      const [move, value] = data[o];

      if (move === 'forward') {
         forward += +value;
      }
      if (move === 'up') {
         depth -= +value;
      }
      if (move === 'down') {
         depth += +value;
      }
   }

   sum = forward * depth;

   console.log('DayTwo-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;
   let forward = 0;
   let aim = 0;
   let depth = 0;

   for (let o = 0; o < data.length; o++) {
      const [move, value] = data[o];

      if (move === 'forward') {
         forward += +value;
         depth += +value * aim;
      }
      if (move === 'up') {
         aim -= +value;
      }
      if (move === 'down') {
         aim += +value;
      }
   }

   sum = forward * depth;

   console.log('DayTwo-PartTwo', sum);
};
