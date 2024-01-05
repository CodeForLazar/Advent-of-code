const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

const formatData = data.map((xy) => xy.split(',').flatMap((row) => row.split('-')));

exports.firstStar = () => {
   let sum = 0;

   for (let i = 0; i < formatData.length; i++) {
      const row = formatData[i];

      const first = +row[0];
      const second = +row[1];
      const third = +row[2];
      const fourth = +row[3];

      if (first <= third && second >= fourth) {
         sum += 1;
      } else if (third <= first && fourth >= second) {
         sum += 1;
      }
   }

   console.log('DayFour-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   for (let i = 0; i < formatData.length; i++) {
      const row = formatData[i];

      const first = +row[0];
      const second = +row[1];
      const third = +row[2];
      const fourth = +row[3];

      if (first >= third && first <= fourth) {
         sum += 1;
      } else if (second >= third && second <= fourth) {
         sum += 1;
      } else if (third >= first && third <= second) {
         sum += 1;
      } else if (fourth >= first && fourth <= second) {
         sum += 1;
      }
   }

   console.log('DayFour-PartTwo', sum);
};
