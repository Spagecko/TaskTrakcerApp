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

       
         backgroundColor: 'yellow'
         

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
            <div style = {style1}>
            
         
                <EditorJs data = {props.Uinput} tools = {{checkList: CheckList}}/>

            
            </div>
           

        </div>
        </form>
    </div>)
};

export default userInput;
