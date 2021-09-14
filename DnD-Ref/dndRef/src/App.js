import './App.css';
import {useState} from 'react';

import { diceOptions } from './constants';
import DiceRoll from './components/DiceRoll';
import RollRawStats from './components/RollRawStats';
import { dndClasses, dndRaces } from './dataPulls';

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

	console.log(dndRaces);
	console.log(dndClasses);
	// const typeOfCheckRaces = typeof dndRaces;
	// const typeOfCheckClasses = typeof dndClasses;

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
			{/* {typeOfCheckRaces}<br/>
			{typeOfCheckClasses} */}
		</div>
	);


	return layout; 
}
