import React from 'react';
import ReactDOM from 'react-dom';

function generateOutput(props){
	const output = (
		<div>
			<p>Test 1,2</p>
		</div>
	);
	return output;
}

ReactDOM.render(<generateOutput/>,document.getElementById('root'));