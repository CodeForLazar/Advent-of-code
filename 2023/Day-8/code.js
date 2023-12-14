const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');

const game = data.map((info) => info.split(' ')).map(char => char.map(charIn => charIn.replace(/[=(),]/g, '')))


exports.fistStar = () => {
    let sum = 0;
   
    console.log('DaySix-PartOne', game);
 };
 
 exports.secondStar = () => {
    let sum = 0;
   
    console.log('DaySix-PartTwo', sum);
 };
 