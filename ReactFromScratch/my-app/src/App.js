import './App.css';
import {useState} from 'react';

export default function App(props) {
  const [rollResult, setRollResult] = useState('-');
  const [rawStats, setRawStats] = useState([]);

// Roll an individual dice, pass the dice size.
  const RollTheDie = (dice) =>{
      return Math.ceil(Math.random() * dice);
  };

  const diceOptions = [
    {label: "D4", value : 4},
    {label: "D6", value : 6},
    {label: "D8", value : 8},
    {label: "D10", value : 10},
    {label: "D12", value : 12},
    {label: "D20", value : 20}
  ]

  const diceButtons = diceOptions.map((item) => (
     <button 
        onClick={() => setRollResult(RollTheDie(item.value))}
      >
        {item.label}
      </button>
  ));


// Roll your raw stats for a new characters.
    const RollRawStats = () =>{
      let statArray = [];
      for (let i = 1; i <= 6; i++){
        let statEntry = [];
        for (let j = 1; j <= 4; j++){
          statEntry.push(RollTheDie(6));
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
            return a - b;
          })
          .slice(1)
          .reduce(( previousValue, currentValue ) => previousValue + currentValue,0)
        );
      }
      return statArray.sort(function(a, b) {
        return a - b;
      })
      .join();
    };

    const rawStatsButton = (
      <button onClick={() => setRawStats(RollRawStats)}
      >
        Generate Stats
      </button>
    );

// Compose the page layout.
  const layout = (
    <div className="App">
      {diceButtons}
      <br />
      <p>Roll result: {rollResult}</p>
      {rawStatsButton}
      <br />
      {rawStats}
    </div>
  );

  return layout; 
}
