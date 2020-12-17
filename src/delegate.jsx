import React from 'react';
import './delegate.css';

// delegates the style to the function FancyBorder(props).
function FancyBorder(props) {
	return (
	// <div className={'FancyBorder FancyBorder-' + props.color}>  // Does not work when 2 class names in attribut 'className'
	<div className={'FancyBorder-' + props.color}>
	   {props.children} {/* get all child content of the tag <FancyBorder> */}
	</div>
	);
}	
  
function WelcomeDialog() {
	
	return (
		<div>
	  <FancyBorder color="green">
		<h1 className="Dialog-title">
		  Welcome
		</h1>
		<p className="Dialog-message">
		  Thank you for visiting our spacecraft!
		</p>
	  </FancyBorder>
	  {/* <FancyBorder color="red">
		<h1 className="Dialog-title">
		  Welcome bis
		</h1>
		<p className="Dialog-message">
		  Thank you for visiting our spacecraft!
		</p>
	  </FancyBorder>
	  <FancyBorder color="green">
		<h1 className="Dialog-title">
		  Welcome ter
		</h1>
		<p className="Dialog-message">
		  Thank you for visiting our spacecraft!
		</p>
	  </FancyBorder> */}
	</div>
	);
}

export default WelcomeDialog;