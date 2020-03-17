import React from 'react';
import EditorJs from 'react-editor-js';
import CheckList from '@editorjs/checklist';
import ReactQuill from 'react-quill'; 
const  userInput = ( props) =>
{
    const style = {

        display: 'flex', 
        padding: '16px', 
        textAlign: 'left',
         margin: '10px',    
         border: '1px solid black',
         backgroundColor: '#f0ead6',
    
         

    };
    const style1 = {

        display: 'block', 
         //backgroundColor: 'yellow',
        // width: '350px',
       // height: '200px'
       minheight: "18em"
        
         

    };
    const styleCenter = {
        textAlign: 'center'
    }
    /* <textarea  type ="text" value = {props.Uinput} onChange = {props.Changed} style = {style1}/> */
    return(
    <div style = {style} >
        <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"></link>
        <form>
        <div >
        <h2>ToDo List Generator</h2>
           <div style = {style1}>
        
                  
           <ReactQuill value={props.Uinput} onChange = {props.onChange} />
            </div>
           
            
      

         
           
        
        </div>
      
        </form>
    </div>)

};

export default userInput;
