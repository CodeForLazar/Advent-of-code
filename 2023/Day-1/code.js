const fs = require('fs');
const path = require('path')

const puzzle = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');
const lines = puzzle.split('\r\n');

exports.fistStar = () => {
   let sum = 0;
   for (let i = 0; i < lines.length; ++i) {
      let line = lines[i];
      let min = '';
      let max = '';

      for (let d = 0; d < line.length; d++) {
         if (!isNaN(line[d])) {
            min = line[d];
            break;
         }
      }

      for (let f = line.length - 1; f >= 0; f--) {
         if (!isNaN(line[f])) {
            max = line[f];
            break;
         }
      }
      sum = sum + Number(min + max);
   }
   console.log('DayOne-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;
   for (let i = 0; i < lines.length; ++i) {
      let line = lines[i].trim();
      line = line.replace('one', 'o1e');
      line = line.replace('two', 't2o');
      line = line.replace('three', 't3e');
      line = line.replace('four', 'f4r');
      line = line.replace('five', 'f5e');
      line = line.replace('six', 's6x');
      line = line.replace('seven', 's7n');
      line = line.replace('eight', 'e8t');
      line = line.replace('nine', 'n9e');
      let min = '';
      let max = '';

      for (let d = 0; d < line.length; d++) {
         if (!isNaN(line[d])) {
            min = line[d];
            break;
         }
      }

      for (let f = line.length - 1; f >= 0; f--) {
         if (!isNaN(line[f])) {
            max = line[f];
            break;
         }
      }
      sum = sum + Number(min + max);
   }
   console.log('DayOne-PartTwo', sum);
};
