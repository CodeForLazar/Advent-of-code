const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');
const matrix = data.map((row) => {
   return row.split('').map(Number);
});
exports.firstStar = () => {
   let sum = [];

   for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i];
      const prevRow = matrix[i - 1];
      const nextRow = matrix[i + 1];

      for (let j = 0; j < row.length; j++) {
         const col = row[j];
         const prevCol = !isNaN(row[j - 1]) ? row[j - 1] : 9;
         const nextCol = !isNaN(row[j + 1]) ? row[j + 1] : 9;
         const upCol = !prevRow ? 9 : prevRow[j];
         const bottomCol = !nextRow ? 9 : nextRow[j];

         if (col < prevCol && col < nextCol && col < upCol && col < bottomCol) {
            sum.push(col + 1);
         }
      }
   }

   sum = sum.reduce((acc, num) => acc + num, 0);

   console.log('DaySeven-PartOne', sum);
};

exports.secondStar = () => {
   let sum = [];

   console.log('DaySeven-PartOne', sum);
};
