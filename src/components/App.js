import React, { Component } from 'react';
import './App.css';
import OutputPanel from './OutputPanel';
import Keyboard from './Keyboard';
import calculate from './logic.js';

/**
 * Calculator data object contains:
 *   hist:String      the expression to evaluate
 *   input:String     the next number to be added to the expression
 *   result:String    the outcome of an evaluated expression
*/

class App extends Component {
	state = {
		result: "",
		hist: "",
		input: "",
	};
	
	handleClick = buttonName => {
		this.setState(calculate(this.state, buttonName));
	}
	
	render() {
	  return (
		<div className="App">
		  <OutputPanel value={this.state.result || this.state.input} />
		  <Keyboard handleClick={this.handleClick} />
		</div>
	  );
	}
}


export default App;
