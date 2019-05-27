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
    console.log("delete elementu o id " + id);
  }

  handleChangeTaskStatus = (id) =>{
    console.log("zmiana statusu elementu o id " + id)
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
