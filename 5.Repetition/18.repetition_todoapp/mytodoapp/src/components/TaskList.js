import React from 'react';
import Task from './Task';

const TaskList = (props) =>{


    const active = props.tasks.filter(task=> task.active === true);

    const done = props.tasks.filter(task=>!task.active);


    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

    // const tasks = props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

    return(
        <>
        <div className='active'>
            <h2>Zadania do zrobienia</h2>
            {activeTasks.length > 0 ? activeTasks : "brak zadań"}
        </div>
        <div className='done'>
            <h3>Zadania zrobione ({done.length})</h3>
            {doneTasks.length>3 ? <p style={{fontSize: "20px"}}>Wyświetlone są tylko 3 ostatnie elementy...</p>: null}
            {doneTasks.slice(0,3)}
        </div>
        </>
    )
}

export default TaskList;