const fs = require('fs');
const path = require('path');

const data = fs
   .readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
   .split('\n')
   .map((row) => row.split(''));

exports.fistStar = () => {
   let sum = 0;

   for (let i = 0; i < data.length; i++) {
      const row = data[i];
      for (let j = 0; j < row.length; j++) {
         const col = row[j];

         const getNeighbors = (rowNum = 1, colNum = 1) => {
            return {
               up: data[i - rowNum]?.[j] || null,
               down: data[i + rowNum]?.[j] || null,
               left: data[i]?.[j - colNum] || null,
               right: data[i]?.[j + colNum] || null,
               upR: data[i - rowNum]?.[j + colNum] || null,
               upL: data[i - rowNum]?.[j - colNum] || null,
               downR: data[i + rowNum]?.[j + colNum] || null,
               downL: data[i + rowNum]?.[j - colNum] || null
            };
         };

         if (col === 'X') {
            Object.entries(getNeighbors()).map(([key, value]) => {
               if (value === 'M') {
                  const nextVal = getNeighbors(2, 2)[key];
                  if (nextVal === 'A') {
                     const finalVal = getNeighbors(3, 3)[key];
                     if (finalVal === 'S') {
                        sum++;
                     }
                  }
               }
            });
         }
      }
   }

   console.log('part1', sum);
};

exports.secondStar = () => {
   let sum = 0;

   for (let i = 0; i < data.length; i++) {
      const row = data[i];
      for (let j = 0; j < row.length; j++) {
         const col = row[j];

         const getNeighbors = (rowNum = 1, colNum = 1) => {
            return {
               upR: data[i - rowNum]?.[j + colNum] || null,
               upL: data[i - rowNum]?.[j - colNum] || null,
               downR: data[i + rowNum]?.[j + colNum] || null,
               downL: data[i + rowNum]?.[j - colNum] || null
            };
         };

         const reverseDirDiagon = (key) => {
            switch (key) {
               case 'upR':
                  return 'downL';
               case 'upL':
                  return 'downR';
               case 'downR':
                  return 'upL';
               case 'downL':
                  return 'upR';
               default:
                  return null;
            }
         };
         const reverseDirNext = (key) => {
            switch (key) {
               case 'upR':
                  return 'upL';
               case 'upL':
                  return 'upR';
               case 'downR':
                  return 'downL';
               case 'downL':
                  return 'downR';
               default:
                  return null;
            }
         };

         if (col === 'A') {
            Object.entries(getNeighbors()).map(([key, value]) => {
               let dCheck = 0;
               if (value === 'S') {
                  const dir = reverseDirDiagon(key);
                  const nextVal = getNeighbors()[dir];
                  if (nextVal === 'M') {
                     dCheck++;
                  }
                  const oposite = getNeighbors()[reverseDirNext(key)];
                  if (oposite === ('S' || 'M')) {
                     const dir = reverseDirDiagon(reverseDirNext(key));
                     const nextVal = getNeighbors()[dir];
                     if (
                        (oposite === 'S' && nextVal === 'M') ||
                        (oposite === 'M' && nextVal === 'S')
                     ) {
                        dCheck++;
                     }
                  }
               }

               if (dCheck === 2) {
                  sum++;
               }
            });
         }
      }
   }

   console.log('part2', sum);
};
