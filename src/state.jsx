import React from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
 };
  
function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}
  
function tryConvert(temperature, convert) {//convert = name of the callback fct 'toCelsius' or 'toFahrenheit'
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) return '';
	return (Math.round(convert(input) * 1000) / 1000).toString();
}
  
function BoilingVerdict(props) {
	if (props.celsius >= 100) {
	  return <p>The water would boil.</p>;
	}
	return <p>The water would not boil.</p>;
}
  
class TemperatureInput extends React.Component {
	constructor(props) {
	  super(props);
	  this.handleChange = this.handleChange.bind(this);
	}
  
	handleChange(event) { 
	  // execute the method 'handleCelsiusChange' OR 'handleFahrenheitChange' (belonging to the parent object 'Calculator')
	  // , which is the value of the prop "onTemperatureChange" of the TemperatureInput element , whose the value has been modified in the UI.
	  this.props.onTemperatureChange(event.target.value); 	// 'event.target.value' = value of the inputbox element whose the value has been modified  
	}	
	
	render() {
	  return (
		<fieldset>
		  <legend>Enter temperature in {scaleNames[this.props.scale ]}:</legend> {/* get the value of the prop 'scale' coming from upper object 'Calculator' */}
		  <input value={this.props.temperature} //get the value of the prop 'temperature' coming from upper object 'Calculator'
	 																					// return an input element from the upper class 'Calculator' 
				 onChange={this.handleChange} />
		</fieldset>
	  );
	}
}
  
class Calculator extends React.Component {
	constructor(props) {
	  super(props); // constructor can access to the props
	  this.handleCelsiusChange = this.handleCelsiusChange.bind(this); //bind fct to the componant
	  this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this); //bind fct to the componant
	  this.state = {temperature: '0', scale: 'c'}; // state of the componant : temperature = empty , default scale = Celsius
// state : define the value of the variables of the componant, whose the value will have an influence on the rending of the componant
	}
  
	handleCelsiusChange(temperature) {
		this.setState({scale: 'c', temperature});//update the state of the variables 'scale' & 'temperature' 
																						 // => re-rendering of the componant 
	  // 'Calculator' based on the new value of variable 'temperature' , used in the componant 'TemperatureInput'
	}
  
	handleFahrenheitChange(temperature) {
	  this.setState({scale: 'f', temperature});//update the state of the variables 'scale' & 'temperature' 
																						 // => re-rendering of the componant 
	}
  
	render() {
	 // gives the state of the scale, that is local in the parent object 'Calculator', to the child object  TemperatureInput
	  const scale = this.state.scale;
	 // gives the state of the temperature, that is local in the parent object 'Calculator' , to the child object  TemperatureInput 
	  const temperature = this.state.temperature; 
	  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
	  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
	  return (
		<div>
		  <TemperatureInput
			scale="c"
			temperature={celsius}
			onTemperatureChange={this.handleCelsiusChange} />
		  <TemperatureInput
			scale="f"
			temperature={fahrenheit}
			onTemperatureChange={this.handleFahrenheitChange} />
		  <BoilingVerdict celsius={parseFloat(celsius)} />
		</div>
	  );
	}
}
  
export default Calculator;
  