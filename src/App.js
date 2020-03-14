import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import EditorJs from 'react-editor-js';
import shortid from 'shortid';
import UserOutput from './UserOutput/UserOutput';
//push me zsdasd
const style = {

  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'

   

};
class App extends Component{
  state = {
    
  
    input:'', 
    entries:0, 
  
    taskdata: [],
    showUserList : false
  }
 

  onChangeHandler = (event) =>
  {
    this.setState({input: event.target.value});
   
  }
 
  onChangeSubmit = (event) =>
  {
    this.state.entries += 1;
    let tempList =  this.state.taskdata;

    
    tempList.push({dataInfo:this.state.input})
    this.setState({taskdata : tempList})
    //this.setState({title: event.target.value});
    //this.setState({input: event.target.value});
    console.log(this.state.taskdata)
    if(this.state.taskdata.length !== 0)
    {
      let T = true; 
      this.setState({showUserList : T});
      console.log("true");
    }
    else{
  
      let F = false; 
      this.setState({showUserList: F});
      console.log("false");
    }
  }
  deleteTaskHandler = (index) => {
   
    const listTask = [...this.state.taskdata];
    listTask.splice(index, 1);
    this.setState({taskdata: listTask });
    if(this.state.taskdata.length !== 0)
    {
      let T = true; 
      this.setState({showUserList : T});
      console.log("true");
    }
    else{
  
      let F = false; 
      this.setState({showUserList: F});
      console.log("false");
    }
  }
render() 
{

  let RenderContentLst = null;
  let idNumber = 0; 
  if(this.state.showUserList)
  {


    RenderContentLst = (
      <div>
        {this.state.taskdata.map((task, index) => {
          let Keyid = shortid.generate();
          console.log(task.dataInfo)
          return (
            
            <UserOutput
            click={() => this.deleteTaskHandler(index)}
            Output={task.dataInfo}
            key={Keyid}
           />
        
        )})}
      </div>
    );
  }

  return (
  
  <div className = "App">
    <div >
  <UserInput Title = {this.state.title} Uinput = {this.state.input} 
    Changed ={this.onChangeHandler} />
      <button style = {style}onClick = {this.onChangeSubmit}>Submit task!</button>
   </div>
   <div className = "Flex-row">
    {RenderContentLst}

   </div>


  </div>

  
  );
}
}

export default App;
