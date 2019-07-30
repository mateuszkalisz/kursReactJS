import React from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends React.Component{

  counter = 4;

  state = {
    tasks: [
      {
        id: 0,
        text: 'rozwiesic pranie',
        date: '2018-05-22',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'pograc na kompie',
        date: '2018-06-15',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'zmyc naczynia',
        date: '2019-01-11',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: 'zjesc obiad',
        date: '2018-06-23',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: 'obejrzec mecz',
        date: '2019-01-17',
        important: false,
        active: true,
        finishDate: null,
      },
    ]
  }

  deleteTask = (id) =>{
    console.log("task usuniety komponentu o id " + id);

    // 1sposob

    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task=>task.id === id);
    // tasks.splice(index,1);
    // this.setState({
    //   tasks: tasks,
    // })

    //2sposob
    let tasks = [...this.state.tasks];

    tasks = tasks.filter(task=> task.id !== id);
    this.setState({
      tasks,
    })
  
  }

  changeTaskStatus = (id) =>{
    console.log("status tasku zmieniony komponentu o id " + id);
    const tasks = [...this.state.tasks];
    tasks.forEach(task =>{
      if(task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks,
    })
  }


  addTask = (text,date,important) =>{
    console.log("dodalem obiekt");

    const task ={
      id: this.counter+1,
      text: text,
      date: date,
      important: important, 
      active: true,
      finishDate: null,
    }

    this.counter++;

    console.log(task,this.counter);
    
    this.setState(prevState =>({
      tasks: [...prevState.tasks, task]
    }))

    return true;
  }

  render(){

  return(
    <div>
      <AddTask add={this.addTask}/>
      <TaskList
       tasks={this.state.tasks}
       delete={this.deleteTask}
       change={this.changeTaskStatus}
       />
    </div>
  )
}
}

export default App;
