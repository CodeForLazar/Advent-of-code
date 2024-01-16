const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

const binaryToDecimal = (binaryNumber) => {
   let reversedBinaryArray = binaryNumber.split('').reverse();

   let decimalResult = 0;

   for (let i = 0; i < reversedBinaryArray.length; i++) {
      decimalResult += parseInt(reversedBinaryArray[i]) * Math.pow(2, i);
   }

   return decimalResult;
};

exports.firstStar = () => {
   let sum = new Array(data[0].length).fill('');
   let gama = '';
   let epsilon = '';

   for (let i = 0; i < data.length; i++) {
      const row = data[i];

      for (let j = 0; j < row.length; j++) {
         const bin = row[j];
         sum[j] += bin;
      }
   }

   for (let i = 0; i < sum.length; i++) {
      const row = sum[i];
      const copies = {};
      for (let j = 0; j < row.length; j++) {
         const bin = row[j];
         copies[bin] = (copies[bin] || 0) + 1;
      }

      if (copies['0'] < copies['1']) {
         gama = gama.concat('1');
         epsilon = epsilon.concat('0');
      } else {
         gama = gama.concat('0');
         epsilon = epsilon.concat('1');
      }
   }

   gama = binaryToDecimal(gama);
   epsilon = binaryToDecimal(epsilon);
   sum = gama * epsilon;

   console.log('DayOne-PartOne', sum);
};

const findElements = (element, data) => {
   let index = 0;
   while (data.length !== 1) {
      const copies = {};
      let columnNumbers = '';
      for (let i = 0; i < data.length; i++) {
         const row = data[i];
         columnNumbers = columnNumbers.concat(row[index]);
      }

      for (const bin of columnNumbers) {
         copies[bin] = (copies[bin] || 0) + 1;
      }

      if (element === 'O2') {
         if (copies['0'] < copies['1']) {
            data = data.filter((row) => row[index] === '1');
         } else if (copies['0'] === copies['1']) {
            data = data.filter((row) => row[index] === '1');
         } else {
            data = data.filter((row) => row[index] === '0');
         }
      } else {
         if (copies['0'] < copies['1']) {
            data = data.filter((row) => row[index] === '0');
         } else if (copies['0'] === copies['1']) {
            data = data.filter((row) => row[index] === '0');
         } else {
            data = data.filter((row) => row[index] === '1');
         }
      }

      index++;
   }

   return binaryToDecimal(data[0]);
};

exports.secondStar = () => {
   let sum = 0;
   let O2 = findElements('O2', data);
   let CO2 = findElements('CO2', data);

   sum = O2 * CO2;

   console.log('DayOne-PartTwo', sum);
};
