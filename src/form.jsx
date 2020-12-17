import React from 'react';

//form
class NameForm extends React.Component {
	constructor(props) {
	  super(props); // constructor has access to the props
	  this.state = {value: ''};
  
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
	  
	// save the content of the <input> element (event.target.value) into the state of the componant
	handleChange(event) { // function has event as parameter
	  this.setState({value: event.target.value}); // set the state of variable 'value' = value of input element 
	  											  // => re-render of the componant 'NameForm'.
	}
  
	handleSubmit(event) {
	  alert('A name was submitted: ' + this.state.value);
	  event.preventDefault(); //prevent re-render of the componant
	}
  
	render() {
	  return (
		<form onSubmit={this.handleSubmit}>
		  <label>
			Name:
			<input type="text" value={this.state.value} onChange={this.handleChange} />
		  </label>
		  <input type="submit" value="Submit" />
		</form>
	  );
	}
  }

  export default NameForm;