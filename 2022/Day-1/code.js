const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

exports.firstStar = () => {
   let index = 0;

   const formatData = data.reduce((acc, cur) => {
      const num = +cur;
      if (num !== 0) {
         acc[index] = num + acc[index] || num;
      } else {
         index = index + 1;
      }
      return acc;
   }, []);

   const sum = formatData.reduce((acc, curr) => {
      if (acc < curr) {
         acc = curr;
      }
      return acc;
   }, 0);

   console.log('DayOne-PartOne', sum);
};

exports.secondStar = () => {
   let index = 0;

   const formatData = data.reduce((acc, cur) => {
      const num = +cur;
      if (num !== 0) {
         acc[index] = num + acc[index] || num;
      } else {
         index = index + 1;
      }
      return acc;
   }, []);

   const topElves = formatData.sort((a, b) => a - b);

   const top3Values = topElves.slice(-3).reduce((acc, curr) => acc + curr);

   console.log('DayOne-PartTwo', top3Values);
};
