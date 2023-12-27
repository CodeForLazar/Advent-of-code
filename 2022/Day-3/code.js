const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

const formatData = data.map((item) => item.split(' '));

const mapLetterToPriority = (letter) => {
   const lowercaseA = 'a'.charCodeAt(0);
   const uppercaseA = 'A'.charCodeAt(0);

   if ('a' <= letter && letter <= 'z') {
      return letter.charCodeAt(0) - lowercaseA + 1;
   } else if ('A' <= letter && letter <= 'Z') {
      return letter.charCodeAt(0) - uppercaseA + 27;
   } else {
      return null;
   }
};

exports.firstStar = () => {
   let sum = 0;
   const characters = [];

   for (let i = 0; i < formatData.length; i++) {
      const sack = formatData[i][0];
      const sackLen = sack.length;
      const middleIndex = Math.floor(sackLen / 2);
      const firstHalf = sack.slice(0, middleIndex);
      const secondHalf = sack.slice(middleIndex);

      outerLoop: for (const char of firstHalf) {
         for (const char2 of secondHalf) {
            if (char === char2) {
               characters.push(mapLetterToPriority(char));
               break outerLoop;
            }
         }
      }
   }

   sum = characters.reduce((acc, num) => acc + num, 0);

   console.log('DayTwo-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;

   console.log('DayTwo-PartTwo', sum);
};
