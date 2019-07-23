import React from 'react';

const Task = (props) =>{
    
    const {id,text,date} = props.task;

    return(
        <div>
            <h4>{text}</h4> <span> - do {date}</span>
            <button onClick={()=>props.change(id)}>Zostało zrobione</button>
            <button onClick={()=>props.delete(id)}>X</button>
        </div>
    )
}

export default Task;