const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8').split('\r\n');

exports.fistStar = () => {
   let sum = [];
   const seeds = data.shift().split(': ')[1].split(' ');
   let formatData = [];
   let index = -1;
   data
      .filter((space) => space !== '')
      .forEach((line) => {
         const formatLine = line.split(' ');
         if (isNaN(formatLine[0])) {
            formatData.push([]);
            index++;
         } else {
            formatData[index].push(formatLine);
         }
      });

   for (let i = 0; i < seeds.length; i++) {
      let seed = +seeds[i];

      for (let d = 0; d < formatData.length; d++) {
         const line = formatData[d];

         for (const row of line) {
            const end = +row[0];
            const start = +row[1];
            const length = +row[2];
            if (seed < +length + +start && seed >= +start) {
               seed = +end + +seed - +start;
               sum[i] = seed;
               break;
            }
         }
      }
   }

   console.log('data', Math.min(...sum));
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DaySeven-PartTwo', sum);
};
