import './App.css';
import {useState} from 'react';

import { diceOptions } from './constants';
import DiceRoll from './components/DiceRoll';
import RollRawStats from './components/RollRawStats';
// import { getClasses } from './classDataPull';
// import { getRaces } from './racesDataPull';

export default function App(props) {

	const [rollNums, setRollNums] = useState(1);
	const [rollResult, setRollResult] = useState('-');
	const [rawStats, setRawStats] = useState([]);

	const rollTimes = (
		<input id="numOfDice" type="number" min="1" max="10" placeholder="1"
			onBlur={(e) => setRollNums(e.target.value)}
		></input>
	);

	const diceButtons = diceOptions.map((item) => (
		<button 
			onClick={() => setRollResult(DiceRoll(item.value,rollNums))}
		>
		{item.label}
	</button>
	));
	
	const rawStatsButton = (
		<button 
			onClick={() => setRawStats(RollRawStats)}
		>
			Generate Stats
		</button>
	);

	const getRaces = fetch('http://localhost:5000/races')
		.then((response) => {return response.json();})
		.then(responseJSON => {
			const races = responseJSON.map(race => race.name).join("\n");
			console.log(responseJSON);
			return races;
		})
		.catch((error) => {
			//handle an error
			console.log(error);
		});

	const getClasses = fetch('http://localhost:5000/classes')
		.then((response) => {return response.json();})
		.then(responseJSON => {
			const classes = responseJSON.map(clasS => clasS.name).join("\n");
			console.log(responseJSON);
			return classes;
		})
		.catch((error) => {
			//handle an error
			console.log(error);
		});

	// Compose the page layout.
	const layout = (
		<div className="App">
			{rollTimes}x {diceButtons}
			<br/>
			<p>Roll result: {rollResult}</p>
			{rawStatsButton}
			<br/>
			{rawStats}
			<br/>
			{getRaces}
		</div>
	);


	return layout; 
}
