import React,{Component} from 'react';
import './App.css';
import Users from './Users'


class App extends Component{

  state = {
    users: [],
  }

handleClickFetch = () => {
  console.log("klikłem");
  fetch('https://randomuser.me/api/?results=10')
  .then(res => {
    if(res.ok)
    {
      return res;
    }
    throw Error(res.status);
  })
  .then(res=>res.json())
  .then(data=>{
    const users = data;
    this.setState({
      users: users.results,
    })
  })
  .catch(err => console.log(err.status))
}

render(){
return(
  <div>
    <button onClick={this.handleClickFetch}>Pokaż użytkowników</button>
    {this.state.users.length > 0 ? <Users users={this.state.users}/> : null}  
  </div>
)
}
}

export default App;
