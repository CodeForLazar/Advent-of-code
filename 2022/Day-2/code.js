const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

const formatData = data.map((xy) => xy.split(' '));

exports.firstStar = () => {
   let sum = 0;
   const signs = {
      A: 1,
      X: 1,
      B: 2,
      Y: 2,
      C: 3,
      Z: 3
   };

   for (let i = 0; i < formatData.length; i++) {
      const [opp, me] = formatData[i];
      const signMe = signs[me];
      const signsOpp = signs[opp];

      if (signMe === signsOpp) {
         sum += signMe + 3;
      } else if (signMe === 1 && signsOpp === 2) {
         sum += signMe;
      } else if (signMe === 1 && signsOpp === 3) {
         sum += signMe + 6;
      } else if (signMe === 2 && signsOpp === 1) {
         sum += signMe + 6;
      } else if (signMe === 2 && signsOpp === 3) {
         sum += signMe;
      } else if (signMe === 3 && signsOpp === 1) {
         sum += signMe;
      } else if (signMe === 3 && signsOpp === 2) {
         sum += signMe + 6;
      }
   }
   console.log('DayTwo-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;
   const signs = {
      A: 1,
      X: 1,
      B: 2,
      Y: 2,
      C: 3,
      Z: 3
   };

   const game = {
      X: 'lose',
      Y: 'draw',
      Z: 'win'
   };

   for (let i = 0; i < formatData.length; i++) {
      const [opp, me] = formatData[i];
      const signMe = signs[me];
      const signsOpp = signs[opp];

      if (game[me] === 'lose') {
         if (signsOpp === 1) sum += 3;
         if (signsOpp === 2) sum += 1;
         if (signsOpp === 3) sum += 2;
      }
      if (game[me] === 'win') {
         if (signsOpp === 1) sum += 2 + 6;
         if (signsOpp === 2) sum += 3 + 6;
         if (signsOpp === 3) sum += 1 + 6;
      }
      if (game[me] === 'draw') {
         if (signsOpp === 1) sum += 1 + 3;
         if (signsOpp === 2) sum += 2 + 3;
         if (signsOpp === 3) sum += 3 + 3;
      }
   }
   console.log('DayTwo-PartTwo', sum);
};
