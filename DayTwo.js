const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

// First Star

const games = [];
let sumOfValidGames = 0;

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

// const { red, green, blue } = cubes.reduce((sum, data) => {
//    const color = Object.keys(data)[0];
//    const value = data[color];
//    sum[color] = (sum[color] || 0) + value;
//    return sum;
// }, {});


console.log('sumOfValidGames', sumOfValidGames);