import React,{Component} from 'react';
import './App.css';

const SingleUser = props =>(
  <li><strong>{props.name}</strong> <p>{props.city}</p></li>
)

class App extends Component{

  state ={
    users: [],
  }

  componentDidMount(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    // xhr.onload = () => {
    //   console.log(xhr.status);
    //   if(xhr.status === 200){
    //     const users = JSON.parse(xhr.response);
    //     console.log(users);
    //       this.setState({
    //         users: users
    //       })
    //       }
    //   }

    xhr.addEventListener('load', () =>{
      console.log(xhr.status);
      if(xhr.status === 200){
        const users = JSON.parse(xhr.response);
        console.log(users);
          this.setState({
            users: users
          })
          }
    })

    xhr.send(null)
  }

  render(){

    const users = this.state.users.map(user => (
     
        <SingleUser key={user.id} name={user.name} city={user.address.city}/>
      ))
    return (
      <ul>
        {users}
      </ul>
    );
  }
}

export default App;
