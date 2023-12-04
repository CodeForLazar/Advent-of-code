const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

const formatData = data.map((card) =>
   card
      .split('Card ')[1]
      .split(': ')[1]
      .split(' | ')
      .map((card) => card.split(' ').filter((num) => num !== ''))
);

let sum = 0;

// Fist Star

// for (let i = 0; i < formatData.length; i++) {
//    const [rowOne, rowTwo] = formatData[i];

//    let points = 0;

//    rowTwo.forEach((num) => {
//       rowOne.forEach((winNum) => {
//          if (num === winNum) {
//             if (!points) {
//                points = 1;
//             } else {
//                points = points * 2;
//             }
//          }
//       });
//    });
//    sum = sum + points;
// }

// Second Star

let copies = new Array(formatData.length).fill(1);

for (let i = 0; i < formatData.length; i++) {
   const [rowOne, rowTwo] = formatData[i];

   let numOfCopies = 0;

   rowTwo.forEach((num) => {
      rowOne.forEach((winNum) => {
         if (num === winNum) {
            numOfCopies = numOfCopies + 1;
         }
      });
   });

   for (let d = 1; d <= numOfCopies; d++) {
      const next = i + d;
      copies[next] = copies[next] + copies[i];
   }
}
console.log('copies', copies)
sum = copies.reduce((acc, currentValue) => acc + currentValue, 0);

console.log('sum', sum)
