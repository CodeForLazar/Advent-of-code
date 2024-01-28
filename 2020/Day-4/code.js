const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');
let formatData = [''];
let j = 0;
for (let i = 0; i < data.length; i++) {
   const row = data[i];
   if (row) {
      formatData[j] = formatData[j].concat(` ${row}`);
   } else {
      j++;
      formatData[j] = '';
   }
}
formatData = formatData.map((row) =>
   row
      .trim()
      .split(' ')
      .map((obj) => obj.split(':'))
);

exports.firstStar = () => {
   let sum = 0;

   for (let i = 0; i < formatData.length; i++) {
      const passport = formatData[i];
      let checks = ['byr', 'iyr', 'eyr', 'hgt', 'ecl', 'pid', 'cid', 'hcl'];
      for (let j = 0; j < passport.length; j++) {
         const [key, value] = passport[j];
         checks = checks.filter((val) => val !== key);
      }
      if (checks.length === 0 || (checks.length === 1 && checks.includes('cid'))) {
         sum++;
      }
   }

   console.log('DayFour-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DayFour-PartTwo', sum);
};
