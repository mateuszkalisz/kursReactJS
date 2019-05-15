import React,{Component} from 'react';
import './App.css';

class App extends Component{

state = {
  users: [],
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(data => {
    this.setState({
      users: data,
    })
  })
}

render(){

  const users = this.state.users.map(user => <div key={user.id}>{user.name} <strong>{user.username}</strong></div>)

  return (
    <div>
      {users}
    </div>
  );
}}

export default App;
