import React,{Component} from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component{

  state ={
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcie w wiedźmina 3",
        date: '2019-09-10',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "umyć naczynia",
        date: '2020-03-10',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "zrobić obiad",
        date: '2019-04-15',
        important: true,
        active: true,
        finishDate: null,
      },
    ]
  }

  handleDeleteTask = (id) =>{

    //1 sposob
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task=>task.id === id)

    // const deletedTask = tasks.splice(index,1);
    // console.log(deletedTask);

    // this.setState({
    //   tasks: tasks,
    // })
    
    //2 sposob
    let tasks = [...this.state.tasks];

    tasks = tasks.filter(task=>task.id!==id);

    console.log(tasks);
    this.setState({
      tasks,
    })
  
  }

  handleChangeTaskStatus = (id) =>{
    
    const tasks = Array.from(this.state.tasks);

    tasks.forEach(task=>{
      if(task.id===id){
        task.active = false;
      }
    })

    this.setState({
      tasks,
    })

  }

  render(){
    return(
      <div>
        <AddTask/>
        <TaskList 
        delete={this.handleDeleteTask} 
        changeStatus={this.handleChangeTaskStatus} 
        tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default App;
