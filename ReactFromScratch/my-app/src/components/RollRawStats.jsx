// Roll your raw stats for a new characters using the (4d6 drop the lowest) x 6 method.
import DiceRoll from './DiceRoll';

export default function RollRawStats(){
    let statArray = []; // All six stat roll totals.
    for (let i = 1; i <= 6; i++){
      let statEntry = []; // Individual stat rolls.
      for (let j = 1; j <= 4; j++){
        statEntry.push(DiceRoll(6,1)); // Like rolling 4d6.
      }

      // console.log(
      //   statEntry
      //   .sort(function(a, b) {
      //     return a - b;
      //   })
        // .slice(1)
      //   .reduce(( previousValue, currentValue ) => previousValue + currentValue,0)
      // );

      statArray.push(
        statEntry
        .sort(function(a, b) {
          return a - b; // Sort in ascending order to slice off the lowest d6 roll.
        })
        .slice(1) // Remove the lowest rolled d6.
        .reduce(( previousValue, currentValue ) => previousValue + currentValue,0) // Add together the remaining 3d6 into one value.
      );
    }
    
    return statArray.sort(function(a, b) {
      return b - a; // Sort in descending order for presentation.
    })
    .join();
  };