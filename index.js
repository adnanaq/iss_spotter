const { nextISSTimesForMyLocation } = require('./iss');
const { printPassTimes } = require('./passtime')

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
