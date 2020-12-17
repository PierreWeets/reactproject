import React from 'react';
import './signup.css';

function FancyBorder(props) {
	return (
	  <div className={'FancyBorder FancyBorder-' + props.color}>
			{props.children}
	  </div>
	);
}
  
function Dialog(props){
	return (
		<FancyBorder color="red">
		<h1 className="Dialog-title">
			{props.title}
		</h1>
		<p className="Dialog-message">
			{props.message}
		</p>
		{props.children}
		</FancyBorder>
	);
}

class SignUpDialog extends React.Component {
	constructor(props){
		super(props);// the constructor can access the props
		this.handleChange = this.handleChange.bind(this);//bind the function to the class 'SignUpDialog'
		this.handleSignUp = this.handleSignUp.bind(this);
		this.state = {login: ''}; //define the variable, whose the change of value shall trigger a re-render of the component
	}

	handleChange(event) { this.setState({login: event.target.value});} //modify the value of variable , defined in the state of the component
		// 'event.target.value ' = NEW value of the input object, whose the value has been modified.
	handleSignUp(){alert(`Welcome aboard, ${this.state.login}!`);} // display value of the state of the variable 'login'

	render(){
		return (
		<Dialog title="Mars Exploration Program" message="How should we refer to you?">
			<input value={this.state.login} onChange={this.handleChange} />
			<button onClick={this.handleSignUp}>
			Sign Me Up!
			</button>
		</Dialog>
		);
	}
}

export default SignUpDialog;