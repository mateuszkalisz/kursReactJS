import React from 'react';

const Task = props => {

    const style = {
        color: 'red',
    }

    const {id, text, date, active, important, finishDate} = props.task;

    if(active){
        return (  
            <div>
                <strong style={important ? style : null}>{text}</strong> - do <span>{date} </span>
                <button onClick={()=>props.change(id)}>Zostało zrobione</button><button onClick={()=>props.delete(id)}>X</button>
            </div>
        );
    }
    else{

        const finishTime = new Date(finishDate).toLocaleString();

        return(
            <div>
                <strong>{text}</strong> <em>(zrobić do {date})</em> 
                <em><br/>-potwierdzenie wykonania {finishTime}</em><button onClick={()=>props.delete(id)}>X</button>
            </div>
        )
    }

}
 
export default Task;