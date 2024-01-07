const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

const indexOfEmptyString = data.indexOf('');
let dataMap;
let dataNav;
if (indexOfEmptyString !== -1) {
   dataMap = data.slice(0, indexOfEmptyString);
   dataNav = data.slice(indexOfEmptyString + 1);
}

const indexes = dataMap
   .filter((row) => /\d/.test(row))
   .flatMap((row) => row.trim().split(/\s+/).map(Number));

const colRows = Array(indexes.at(-1))
   .fill(0)
   .map((x) => []);

for (let i = dataMap.length - 2; i >= 0; i--) {
   let line = dataMap[i];
   let stackIndex = 0;
   while (line !== '') {
      const value = line.substring(0, 2);
      if (value.trim() !== '') {
         colRows[stackIndex].push(value[1]);
      }
      line = line.substring(4);
      stackIndex++;
   }
}

dataNav = dataNav.map((move) => move.match(/\d+/g).map(Number));

exports.firstStar = () => {
   let sum = '';

   for (let i = 0; i < dataNav.length; i++) {
      const howMany = [dataNav[i][0]];
      const from = dataNav[i][1] - 1;
      const to = dataNav[i][2] - 1;

      for (let j = 0; j < howMany; j++) {
         let crate = colRows[from].pop();
         colRows[to].push(crate);
      }
   }

   colRows.forEach((row) => {
      sum += row.at(-1);
   });

   console.log('DayFive-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DayFive-PartTwo', sum);
};
