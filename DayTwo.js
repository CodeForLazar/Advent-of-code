const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

// First Star

const games = [];
let sum = 0;

for (let game of data) {
   let gameData = game.split('Game')[1];
   gameData = gameData.replaceAll(';', ',');
   gameData = gameData.split(':');
   const key = gameData[0].trim();
   const values = gameData[1].split(',');

   const valuesArray = [];

   for (let i = 0; i < values.length; i++) {
      let value = values[i].trim();
      value = value.split(' ');
      valuesArray.push({ [value[1]]: +value[0] });
   }
   games.push({ [key]: valuesArray });
}

for (let i = 0; i < games.length; i++) {
   const gameId = Object.keys(games[i])[0];
   const cubes = Object.values(games[i])[0];

   const game = cubes.map((colors) => {
      if (colors.red > 12) return null;
      if (colors.green > 13) return null;
      if (colors.blue > 14) return null;
      return colors;
   });

   if (!game.some((cube) => cube === null)) {
      sumOfValidGames = sumOfValidGames + +gameId;
   }
}

// Second Star

for (let game of data) {
   let gameData = game.split('Game')[1];
   gameData = gameData.replaceAll(';', ',');
   gameData = gameData.split(':');
   const key = gameData[0].trim();
   const values = gameData[1].split(',');

   const valuesArray = [];

   for (let i = 0; i < values.length; i++) {
      let value = values[i].trim();
      value = value.split(' ');
      valuesArray.push({ [value[1]]: +value[0] });
   }
   games.push({ [key]: valuesArray });
}

for (let i = 0; i < games.length; i++) {
   const gameId = Object.keys(games[i])[0];
   const cubes = Object.values(games[i])[0];

   let red = 0;
   let green = 0;
   let blue = 0;

   for (const cube of cubes) {
      if (cube.red && cube.red > red) {
         red = cube.red;
      }
      if (cube.green && cube.green > green) {
         green = cube.green;
      }
      if (cube.blue && cube.blue > blue) {
         blue = cube.blue;
      }
   }

   const power = red * green * blue;
   sum += power;
}

console.log('sum', sum);
