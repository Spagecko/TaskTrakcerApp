import React from 'react';
import EditorJs from 'react-editor-js';
import CheckList from '@editorjs/checklist';

const  userInput = ( props) =>
{
    const style = {

        display: 'inline-table', 
        padding: '16px', 
        textAlign: 'left',
         margin: '10px',    
         border: '1px solid black',
         backgroundColor: 'grey',
    
         

    };
    const style1 = {

        display: 'inline-table', 
         backgroundColor: 'yellow',
         width: '220px',
        height: '200px'
        
         

    };
    const styleCenter = {
        textAlign: 'center'
    }
    
    return(
    <div style = {styleCenter}>
        
        <form>
        <div style = {style}>
           <div>
            <h2>ToDo List Generator</h2>
            <label>
          
               
            </label>
            </div>
            <div>
            
         
                <textarea  type ="text" value = {props.Uinput} onChange = {props.Changed} style = {style1}/>

            
            </div>
           
        
        </div>
        </form>
    </div>)

};

export default userInput;
