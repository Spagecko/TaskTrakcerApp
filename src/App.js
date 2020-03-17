import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import EditorJs from 'react-editor-js';
import ReactQuill from 'react-quill'; 
import shortid from 'shortid';
import UserOutput from './UserOutput/UserOutput';
import {parse,stringify} from 'himalaya';
//push me zsdasd
const style = {

  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'

   

};
class App extends Component{
  constructor(props)
  {
    super(props)
    this.state = { 
      input: '',
      
    input:'', 
    entries:0, 
  
    taskdata: [],
    showUserList : false
  
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

 

  onChangeHandler = (value) =>
  {
    console.log(value);
    this.setState({input: value});
   
  }
 
  onChangeSubmit = (event) =>
  {
    this.state.entries += 1;
    let tempList =  this.state.taskdata;
    //html to json
    const html = this.state.input; 
    const json = parse(html); 
   // alert(JSON.stringify(json));

   // json to html 
    //console.log(stringify(json));

    
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
    this.setState({input:''})
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


   //the raw state, stringified
//const rawDraftContentState = JSON.stringify( convertToRaw(this.state.input.getCurrentContent()) );
//console.log(rawDraftContentState);
// convert the raw state back to a useable ContentState object
//console.log("CONTENT STATE");
//const contentState = convertFromRaw( JSON.parse( rawDraftContentState) );
//console.log(stateToHTML(contentState));
//console.log(contentState);

  return (
 
  <div className = "App">
    <div className = "Flew-row">
    <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"></link>
    <ReactQuill   value={this.state.input} 
    onChange = {this.onChangeHandler} 
    bounds={'.app'}/>
    
   </div>
   <button style = {style}onClick = {this.onChangeSubmit}>Submit task!</button>
   <div className = "Flex-row">
    {RenderContentLst}

   </div>
    

  </div>

  
  );
}
}

export default App;
