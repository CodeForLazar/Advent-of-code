const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

const formatData = data.map((row) => row.split(' '));

const processNumber = (sum, numberOfSequences, addSignals, value) => {
   if (
      numberOfSequences === 20 ||
      numberOfSequences === 60 ||
      numberOfSequences === 100 ||
      numberOfSequences === 140 ||
      numberOfSequences === 180 ||
      numberOfSequences === 220
   ) {
      sum.push(addSignals * numberOfSequences);
   }
};

exports.firstStar = () => {
   let sum = [];
   let numberOfSequences = 0;
   let addSignals = 1;
   let addNowDelay = false;

   for (let i = 0; i < formatData.length; i++) {
      const [command, value] = formatData[i];

      if (command.includes('addx')) {
         for (let j = 0; j < 2; j++) {
            numberOfSequences++;
            processNumber(sum, numberOfSequences, addSignals, value);
         }
         addSignals += +value;
      } else {
         numberOfSequences++;
         processNumber(sum, numberOfSequences, addSignals, value);
      }
   }

   sum = sum.reduce((acc, num) => acc + num, 0);

   console.log('DayTen-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DayTen-PartTwo', sum);
};
