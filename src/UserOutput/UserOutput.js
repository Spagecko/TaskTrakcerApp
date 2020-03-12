import React from 'react';

const  userOutput = (props) =>
{


    const style1 = {

        display: 'inline-table', 
        padding: '15x', 
        textAlign: 'left',
         margin: '10px',    
         border: '1px solid black',
         backgroundColor: 'grey',
    
         

    };
    const style2 = {

        display: 'inline-table', 
        padding: '16px', 
        textAlign: 'left',
         margin: '10px',    
         border: '1px solid black',
         backgroundColor: 'yellow',
    
         

    };

    const style3 = {

        display: 'inline-table', 
         backgroundColor: 'yellow',
         width: '220px',
        height: '200px'
         

    };

    return(

        <div style ={style1}> 
        <div style = {style2}>
            <h2> TASK ID  </h2>
            <div>
            <textarea value = {props.Output} style = {style3}/> 
            </div>
           
            <button>Task Complete!</button>
        <button> End Task</button>
        <button>urgent</button>
        </div>
        
        </div>
    );
};

export default userOutput;
