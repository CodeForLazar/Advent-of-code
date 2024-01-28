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
      let checks = ['byr', 'iyr', 'eyr', 'hgt', 'ecl', 'pid', 'hcl'];
      for (let j = 0; j < passport.length; j++) {
         const [key, value] = passport[j];
         checks = checks.filter((val) => val !== key);
      }
      if (checks.length === 0) {
         sum++;
      }
   }

   console.log('DayFour-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   for (let i = 0; i < formatData.length; i++) {
      const passport = formatData[i];
      let checks = ['byr', 'iyr', 'eyr', 'hgt', 'ecl', 'pid', 'hcl'];
      const checkValuesForEyes = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
      for (let j = 0; j < passport.length; j++) {
         const [key, value] = passport[j];

         if (key === 'byr' && +value >= 1920 && +value <= 2002) {
            checks = checks.filter((val) => val !== key);
         }
         if (key === 'iyr' && +value >= 2010 && +value <= 2020) {
            checks = checks.filter((val) => val !== key);
         }
         if (key === 'eyr' && +value >= 2020 && +value <= 2030) {
            checks = checks.filter((val) => val !== key);
         }
         if (key === 'hgt') {
            const resultArray = value.match(/(\d+)([a-zA-Z]+)/);
            const [, numbers, letters] = resultArray || [];
            if (letters === 'cm' && +numbers >= 150 && +numbers <= 193) {
               checks = checks.filter((val) => val !== key);
            }
            if (letters === 'in' && +numbers >= 59 && +numbers <= 76) {
               checks = checks.filter((val) => val !== key);
            }
         }
         if (key === 'hcl' && value.startsWith('#')) {
            checks = checks.filter((val) => val !== key);
         }
         if (key === 'ecl' && checkValuesForEyes.includes(value)) {
            checks = checks.filter((val) => val !== key);
         }
         if (key === 'pid' && value.length === 9) {
            checks = checks.filter((val) => val !== key);
         }
      }
      if (checks.length === 0) {
         sum++;
      }
   }

   console.log('DayFour-PartTwo', sum);
};
