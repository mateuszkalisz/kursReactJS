import React from 'react';
import Task from './Task';


const TaskList = props => {

    const active = props.tasks.filter(task=>task.active);

    const done = props.tasks.filter(task=>!task.active);

    const activeTasks = active.map(task=><Task key={task.id} task={task} delete={props.delete} change={props.changeStatus}/>)
    const doneTasks = done.map(task=><Task key={task.id} task={task} delete={props.delete} change={props.changeStatus}/>)


    console.log(activeTasks,doneTasks);
    return (  
        <div>
        <div className="active">
            <h1>Zadania do zrobienia</h1>
            {activeTasks.length > 0 ? activeTasks : "Brak zadań, wszystko zrobiłeś szczęśliwy człowieku!"}
        </div>

        <hr/>
        <div className="done">
            <h3>Zadania zrobione ({doneTasks.length})</h3>
            {doneTasks.length > 3 ? <span><em style={{fontSize: 12}}>(Wyświetlone są tylko 3 ostatnie zadania)</em> </span> : null}
            {doneTasks.slice(0,3)}
        </div>
        </div>

    );
}
 
export default TaskList;