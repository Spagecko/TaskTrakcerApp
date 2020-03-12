import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import EditorJs from 'react-editor-js';

import UserOutput from './UserOutput/UserOutput';
//push me zsdasd
class App extends Component{
  state = {
    
    title :'', 
    input:'', 
    taskData:[]
  }

  onChangeSubmit = (event) =>
  {
    this.setState({title: event.target.value});
    this.setState({input: event.target.value});
    console.log("This button has been clicked!")
  }
render() 
{
  return (<div>

  <UserInput Title = {this.state.title} Uinput = {this.state.input}/>
  <button onClick = {this.onChangeSubmit}>Submit task!</button>
  <UserOutput Output = {this.state.input}/>
  </div>);
}
}

export default App;
