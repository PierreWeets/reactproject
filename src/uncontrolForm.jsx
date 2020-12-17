import React from 'react';

class NameFormUncontrolled extends React.Component {
	constructor(props) { // use the props to construct 
	  super(props); //to access to the value of 'this.props' in constructor
	  this.handleSubmit = this.handleSubmit.bind(this); //bind the fct handleSubmit() to the componant 
	  this.input = React.createRef(); // create a REF to the input element
	}
  
	handleSubmit(event) {
	  alert('A name was submitted: ' + this.input.current.value);
	  event.preventDefault(); // prevent re-display of the complete page
	}
  
	render() {
	  return (
		<form onSubmit={this.handleSubmit}>
		  <p>Uncontrolled componant by React:</p>	
		  <label>
			Name:
			<input defaultValue="default value" type="text" ref={this.input} /> {/*ref of the input element*/}
		  </label>
		  <input type="submit" value="Submit" />
		</form>
	  );
	}
}
  
export default NameFormUncontrolled;