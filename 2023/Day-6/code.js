const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

const game = data.map((info) =>
   info
      .split(':')[1]
      .trim()
      .replace(/^\s+|\s+$|\s+(?=\s)/g, '')
      .split(' ')
);

exports.fistStar = () => {
   let sum = 1;
   let waysToWin = [];
   const time = game[0];
   const distance = game[1];
   for (let i = 0; i < time.length; i++) {
      const timeVal = time[i];
      const DistanceVal = distance[i];
      let buttonHold = timeVal;
      waysToWin.push(0);
      for (let sec = 0; sec <= timeVal; sec++) {
         if (sec * buttonHold > DistanceVal) {
            waysToWin[i]++;
         }
         buttonHold = buttonHold - 1;
      }
   }

   sum = waysToWin.reduce((acc, num) => acc * num);
   console.log('DaySix-PartOne', sum);
};

exports.secondStar = () => {
   let sum = 0;
   const time = +game[0].reduce((acc, num) => acc + num);
   const distance = +game[1].reduce((acc, num) => acc + num);

   let buttonHold = time;
   for (let sec = 0; sec <= time; sec++) {
      if (sec * buttonHold > distance) {
         sum++;
      }
      buttonHold = buttonHold - 1;
   }
   console.log('DaySix-PartTwo', sum);
};
