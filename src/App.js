import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import EditorJs from 'react-editor-js';

import UserOutput from './UserOutput/UserOutput';
//push me zsdasd
const style = {

  display: 'inline-table', 

  textAlign: 'left',
 
  
   backgroundColor: 'grey',

   

};
class App extends Component{
  state = {
    
    title :'HELLO', 
    input:'', 
    editorInstance:'',
    taskData:[]
  }

  onChangeHandler = (event) =>
  {
    this.setState({input: event.target.value});
  }
 
  onChangeSubmit = (event) =>
  {
    //this.setState({title: event.target.value});
    //this.setState({input: event.target.value});
    console.log("This button has been clicked!")
  }
render() 
{
  return (
  
  <div>
    <div style = {style}>
  <UserInput Title = {this.state.title} Uinput = {this.state.input} 
    Changed ={this.onChangeHandler} />
      <button onClick = {this.onChangeSubmit}>Submit task!</button>
   </div>

  <UserOutput Output = {this.state.input}/>
  </div>

  
  );
}
}

export default App;
