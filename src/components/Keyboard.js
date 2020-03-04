import React, { Component } from 'react';
import './Keyboard.css';

class Keyboard extends Component {
	handleClick = buttonName => {
		this.props.handleClick(buttonName);
	}
	
	render() {
		return (
		<div className="keyboard-bg">
		  <div className="keyboard-row">
			<button name="7" onClick={(e) => this.handleClick(e.target.name)}>7</button>
			<button name="8" onClick={(e) => this.handleClick(e.target.name)}>8</button>
			<button name="9" onClick={(e) => this.handleClick(e.target.name)}>9</button>
			<button name="AC" onClick={(e) => this.handleClick(e.target.name)}>AC</button>
		  </div>
		  <div className="keyboard-row">
			<button name="4" onClick={(e) => this.handleClick(e.target.name)}>4</button>
			<button name="5" onClick={(e) => this.handleClick(e.target.name)}>5</button>
			<button name="6" onClick={(e) => this.handleClick(e.target.name)}>6</button>
			<button name="+" onClick={(e) => this.handleClick(e.target.name)}>+</button>
		  </div>
		  <div className="keyboard-row">
			<button name="1" onClick={(e) => this.handleClick(e.target.name)}>1</button>
			<button name="2" onClick={(e) => this.handleClick(e.target.name)}>2</button>
			<button name="3" onClick={(e) => this.handleClick(e.target.name)}>3</button>
			<button name="-" onClick={(e) => this.handleClick(e.target.name)}>-</button>
		  </div>
		  <div className="keyboard-row">
			<button name="0" id="zero" onClick={(e) => this.handleClick(e.target.name)}>0</button>
			<button name="." onClick={(e) => this.handleClick(e.target.name)}>.</button>
			<button name="=" onClick={(e) => this.handleClick(e.target.name)}>=</button>
		  </div>
		</div>
		);
	}
}


export default Keyboard;