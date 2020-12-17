import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Hello from './hello';

function Welcome(props){ 
  return <h1>Bonjour, {props.name}</h1>;
}

const sentence = <Welcome name="Pierre" />;

class App extends Component {
  render() {
    
    return (
    
       <div className="App">
         <Hello/>
         {sentence /*calls the React element 'sentence' and executes the welcome function with property name="Pierre"*/} 
         <Welcome name="Paul"/>
       </div>  
    );
  }
}

export default App;
