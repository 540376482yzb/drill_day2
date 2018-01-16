'use strict';

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    let time = "";
  if (warningCounter > 0 ) {
    time = "times"
  } else {
    time = "time";
  }
    warningCounter ++;
    console.log(`${typeOfWarning} harzard at ${location}`);
    console.log(`the ${typeOfWarning} have been triggered ${warningCounter} ${time} today`);
  };
}

const first = hazardWarningCreator('Blizzard');
const second = hazardWarningCreator('Storm');
const third = hazardWarningCreator('Hurricane');

first('New York');
second('Georgia');
third('Texas');
third('Texas');
third('Texas');


let turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];



const results = turtleMovements.filter(function(move) {
    if (move[0] >= 0 && move[1] >= 0) {
      return true;
    }
});

console.log(results);

const totalStep = results.map( move => {
    return move[0] + move[1]
})

console.log(totalStep)

