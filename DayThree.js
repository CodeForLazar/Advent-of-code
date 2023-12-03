const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const rows = data.map((r) => r + '.');
let sum = 0;

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
console.log('sum', sum);
