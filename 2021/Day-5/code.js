const fs = require('fs');
const path = require('path');

const data = fs
   .readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
   .split('\r\n')
   .map((row) => row.match(/\d+/g).map(Number));

const rowLength = data.reduce((acc, num) => {
   if (acc < num[1]) {
      acc = num[1];
   }
   if (acc < num[3]) {
      acc = num[3];
   }
   return acc;
}, 0);
const colLength = data.reduce((acc, num) => {
   if (acc < num[0]) {
      acc = num[0];
   }
   if (acc < num[2]) {
      acc = num[2];
   }
   return acc;
}, 0);

exports.firstStar = () => {
   let sum = 0;
   const map = Array.from({ length: rowLength + 1 }, () => Array(colLength + 1).fill(0));

   for (let i = 0; i < data.length; i++) {
      const row = data[i];
      const x1 = row[0];
      const y1 = row[1];
      const x2 = row[2];
      const y2 = row[3];

      if (x1 === x2) {
         if (y1 < y2) {
            for (let j = y1; j <= y2; j++) {
               map[j][x1] = map[j][x1] + 1;
            }
         } else {
            for (let j = y1; j >= y2; j--) {
               map[j][x1] = map[j][x1] + 1;
            }
         }
      }

      if (y1 === y2) {
         if (x1 < x2) {
            for (let j = x1; j <= x2; j++) {
               map[y1][j] = map[y1][j] + 1;
            }
         } else {
            for (let j = x1; j >= x2; j--) {
               map[y1][j] = map[y1][j] + 1;
            }
         }
      }
   }

   for (const row of map) {
      for (const col of row) {
         if (col >= 2) {
            sum += 1;
         }
      }
   }

   console.log('DayFive-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;
   const map = Array.from({ length: rowLength + 1 }, () => Array(colLength + 1).fill(0));

   for (let i = 0; i < data.length; i++) {
      const row = data[i];
      const x1 = row[0];
      const y1 = row[1];
      const x2 = row[2];
      const y2 = row[3];

      if (x1 === x2) {
         if (y1 < y2) {
            for (let j = y1; j <= y2; j++) {
               map[j][x1] = map[j][x1] + 1;
            }
         } else {
            for (let j = y1; j >= y2; j--) {
               map[j][x1] = map[j][x1] + 1;
            }
         }
      }

      if (y1 === y2) {
         if (x1 < x2) {
            for (let j = x1; j <= x2; j++) {
               map[y1][j] = map[y1][j] + 1;
            }
         } else {
            for (let j = x1; j >= x2; j--) {
               map[y1][j] = map[y1][j] + 1;
            }
         }
      }

      if (Math.abs(y1 - y2) === Math.abs(x1 - x2)) {
         if (y2 > y1) {
            let col = x1;
            if (x1 < x2) {
               for (let j = y1; j <= y2; j++) {
                  map[j][col] = map[j][col] + 1;
                  col++;
               }
            } else {
               for (let j = y1; j <= y2; j++) {
                  map[j][col] = map[j][col] + 1;
                  col--;
               }
            }
         } else {
            if (x1 < x2) {
               let col = x2;
               for (let j = y2; j <= y1; j++) {
                  map[j][col] = map[j][col] + 1;
                  col--;
               }
            } else {
               let col = x2;
               for (let j = y2; j <= y1; j++) {
                  map[j][col] = map[j][col] + 1;
                  col++;
               }
            }
         }
      }
   }

   for (const row of map) {
      for (const col of row) {
         if (col >= 2) {
            sum += 1;
         }
      }
   }

   console.log('DayFive-PartTwo', sum);
};
