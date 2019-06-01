import React from 'react';
import Task from './Task';


const TaskList = props => {

    const active = props.tasks.filter(task=>task.active);

    const done = props.tasks.filter(task=>!task.active);

    // done.sort((a,b)=>{
    //     return(
    //         b.finishDate - a.finishDate
    //     )
    // })
    if(done.length>=2){
        done.sort((a,b) => {

            if(a.finishDate < b.finishDate)
            {
                return 1;
            }
            if(a.finishDate > b.finishDate)
            return -1;
            else{
                return 0;
            }
        })
    }

    if(active.length>=2){
        active.sort((a,b)=>{

            a=a.text.toLowerCase();
            b=b.text.toLowerCase();

            if(a.text<b.text)
            {
                return -1;
            }
            else if(a.text>b.text){
                return 1;
            }
            else{
                return 0;
            }
        })
    }


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