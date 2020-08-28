const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./passtime')

nextISSTimesForMyLocation()
  .then((passTime) => {
    printPassTimes(passTime);
  }).catch(error => {
    console.log(`If didn\'t work:  ${error.message}`)
  })
