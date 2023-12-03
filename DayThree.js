const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const rows = data.map((r) => r + '.');
let sum = 0;

// First Star

for (let i = 0; i < rows.length; i++) {
   let number = '';
   let numberIndexStart = null;

   for (d = 0; d < rows[0].length; d++) {
      const char = rows[i][d];

      if (!isNaN(char)) {
         number = number + char;
         if (numberIndexStart === null) {
            numberIndexStart = d;
         }
      } else if (char !== '.' && number) {
         sum = sum + +number;
      } else if (number) {
         let foundSymbol = false;

         for (let c = numberIndexStart - 1; c <= d; c++) {
            if (foundSymbol) break;
            if (c < 0 || c >= rows[0].length) continue;

            for (let r = i - 1; r <= i + 1; r++) {
               if (foundSymbol) break;
               if (r < 0 || r >= rows.length) continue;

               const adjacentCell = rows[r][c];

               if (!digits.includes(adjacentCell) && adjacentCell !== '.') {
                  sum = sum + Number(number);
                  foundSymbol = true;
               }
            }
         }
      }
      if (!digits.includes(char)) {
         numberIndexStart = null;
         number = '';
      }
   }
}

// Second Star

const map = new Map();
const gear = "*";

const lenRows = rows.length;
const lenColumns = rows[0].length;
for (let i = 0; i < lenRows; i++) {
   let number = '';

   let numberIndexStart = undefined;
   for (j = 0; j < lenColumns; j++) {
      const currChar = rows[i][j];
      if (digits.includes(currChar)) {
         number += currChar;
         if (numberIndexStart === undefined) {
            numberIndexStart = j;
         }
      } else if (currChar === gear && number) {
         const k = i + ',' + j;
         if (map.has(k)) {
            const newValue = map.get(k)[1] * Number(number);
            const newFrequency = map.get(k)[0] + 1;
            map.set(k, [newFrequency, newValue]);
         } else {
            map.set(k, [1, Number(number)]);
         }
      } else if (number) {
         for (let c = numberIndexStart - 1; c <= j; c++) {
            if (c < 0 || c >= lenColumns) continue;
            for (let r = i - 1; r <= i + 1; r++) {
               if (r < 0 || r >= lenRows) continue;
               const adjacentCell = rows[r][c];
               if (adjacentCell === gear) {
                  const k = r + ',' + c;
                  if (map.has(k)) {
                     const newValue = map.get(k)[1] * Number(number);
                     const newFrequency = map.get(k)[0] + 1;
                     map.set(k, [newFrequency, newValue]);
                  } else {
                     map.set(k, [1, Number(number)]);
                  }
               }
            }
         }
      }
      if (!digits.includes(currChar)) {
         numberIndexStart = undefined;
         number = '';
      }
   }
}

sum = Array.from(map.values())
   .filter((v) => v[0] === 2)
   .reduce((acc, v) => {
      acc = acc + v[1];
      return acc;
   }, 0);

console.log('sum', sum);
