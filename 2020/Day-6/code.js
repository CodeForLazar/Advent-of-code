const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\r\n');
let formatData = [];

let index = 0;
for (let i = 0; i < data.length; i++) {
   const char = data[i];
   if (!char) {
      index++;
      continue;
   }
   formatData[index] = (formatData[index] || '') + char;
}

exports.firstStar = () => {
   let sum = [];

   for (let i = 0; i < formatData.length; i++) {
      const group = formatData[i];
      let uniqueCharacters = new Set(group);
      sum.push(uniqueCharacters.size);
   }

   sum = sum.reduce((acc, num) => acc + num, 0);

   console.log('DaySix-PartOne', sum);
};

formatData = [];
let groupPeople = [];
index = 0;
for (let i = 0; i < data.length + 1; i++) {
   const person = data[i];
   if (!person) {
      formatData.push(groupPeople);
      groupPeople = [];
      index = 0;
      continue;
   }
   groupPeople[index] = person;
   index++;
}

exports.secondStar = () => {
   let sum = [];
   for (let i = 0; i < formatData.length; i++) {
      const group = formatData[i];
      let answers = {};
      for (let j = 0; j < group.length; j++) {
         const person = group[j];

         for (let k = 0; k < person.length; k++) {
            const char = person[k];
            answers[char] = (answers[char] || 0) + 1;
         }
      }
      sum.push(Object.values(answers).filter((x) => x === group.length).length);
   }

   sum = sum.reduce((acc, num) => acc + num, 0);

   console.log('DaySix-PartTwo', sum);
};
