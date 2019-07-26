import React from 'react';

const Task = (props) =>{
    
    const style = {
        color: 'red',
    }

    const {id,text,date,active,important,finishDate} = props.task;

    if(active){
        return(
            <div>
                <h4 style={important ? style : null}>{text}</h4> <span> - do {date}</span>
                <button onClick={()=>props.change(id)}>Zostało zrobione</button>
                <button onClick={()=>props.delete(id)}>X</button>
            </div>
        )
    }
    else{
        const finish = new Date(finishDate).toLocaleString();
        return(
            <div>
                <h4>{text}</h4> <span> - zrobić do {date} </span>
                <br/>
                <p>potwierdzenie wykonania - {finish}</p>
                <button onClick={()=>props.delete(id)}>X</button>
            </div>
        )
    }


}

export default Task;