import React from 'react';

class FlavorForm extends React.Component {
	constructor(props) {
	  super(props);  // constructor has access to the props
	  this.state = {value: 'lime'}; // variable 'value' is set to "lime" => modification of variable 'value' triggers the re-rending
	  this.handleChange = this.handleChange.bind(this); // bind the function to the componant
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
    // save the content of the <select> element (event.target.value) into the state of the componant
	handleChange(event){this.setState({value: event.target.value});} // 'event.target.value' = value chosen in the listbox
	
	handleSubmit(event) {
	  alert('Your favorite flavor is : ' + this.state.value); // 'this.state.value' = content of the variable 'value'
															  // setted in the fct handleChange()
	  event.preventDefault();
	}
  
	render() {
	  return (
		<form onSubmit={this.handleSubmit}>
		  <label>
			Your favorite flavor :
			<select value={this.state.value} onChange={this.handleChange}>
			  <option value="grapefruit">Pamplemousse</option>
			  <option value="lime">Citron vert</option>
			  <option value="coconut">Noix de coco</option>
			  <option value="mango">Mangue</option>
			</select>
		  </label>
		  <input type="submit" value="Send" />
		</form>
	  );
	}
  }

  export default FlavorForm;