const fs = require('fs');
const path = require('path');
const lines = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8').split('\r\n');

exports.fistStar = () => {
    const result = {
        seeds: [],
        mappers: []
    } 
    const seedLine = lines.shift();
    result.seeds = seedLine.substring(7).split(" ").map(s => parseInt(s, 10));
    lines.shift();

    while (lines.length > 0) {
        lines.shift();
        const mapper = [];
        let mapperLine = lines.shift();
        while (mapperLine) {
            const mmatch = mapperLine.match(/^(\d+) (\d+) (\d+)$/);
            mapper.push([parseInt(mmatch[1], 10), parseInt(mmatch[2], 10), parseInt(mmatch[3], 10)]);
            mapperLine = lines.shift();
        }
        result.mappers.push(mapper);
    }
    const processSeed = (seed, mappers) => {
      let result = seed;
      for (const mapper of mappers) {
          result = processMapper(result, mapper);
          //console.log(result);
      }
      //console.log("----");
      return result;
  };

  const processMapper = (seed, mapper)=> {
   for (const [destination, source, duration] of mapper) {
       if ((seed >= source) && (seed < duration + source)) {
           return destination + seed - source;
       }
   }
   return seed;
};


   const location = result.seeds.map(s => processSeed(s, result.mappers));
 console.log('first', location) 
}

exports.secondStar = () => {
   let sum = 0;

   console.log('DaySeven-PartTwo', sum);
};
