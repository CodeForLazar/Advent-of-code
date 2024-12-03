const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\n');

const regexExtractMul = /mul\(\d{1,3},\d{1,3}\)/g;
const regex = /\d{1,3}/g;

exports.fistStar = () => {
   let sum = [];

   data.forEach((element) => {
      const matches = element.match(regexExtractMul);
      matches
         .map((item) => item.match(regex))
         .map((arr) => {
            const [num1, num2] = arr;
            sum.push(+num1 * +num2);
            return null;
         });
   });

   sum = sum.reduce((acc, num) => acc + num, 0);

   console.log('Day3-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('Day3-PartTwo', sum);
};
