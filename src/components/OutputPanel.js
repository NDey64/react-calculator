import React, { Component } from 'react';
import './OutputPanel.css';

class OutputPanel extends Component {
	render() {
		let val="0";
		if(this.props.value){
		  val = this.props.value;
		};
		
		return (
		<div className="output-bg">
		  <div>{val}</div>
		</div>
		);
	}
}


export default OutputPanel;