const fs = require('fs');
const path = require('path');

const data = fs
   .readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
   .split('\r\n')
   .map((row) =>
      [
         row.split(':')[0].split(' ')[0].split('-'),
         row.split(':')[0].split(' ')[1],
         row.split(':')[1]
      ].flat()
   );

exports.firstStar = () => {
   let sum = 0;

   for (let i = 0; i < data.length; i++) {
      const [min, max, key, password] = data[i];
      let copies = 0;
      let char;
      for (let k = 0; k < password.length; k++) {
         char = password[k];
         if (key === char) {
            copies++;
         }
      }
      if (copies >= +min && copies <= +max) {
         sum++;
      }
   }

   console.log('DayTwo-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DayTwo-PartTwo', sum);
};
