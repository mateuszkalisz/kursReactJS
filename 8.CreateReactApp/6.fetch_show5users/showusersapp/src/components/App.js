import React from 'react';
import {Component} from 'react'
import './App.css';
import UsersList from './UsersList'
import ButtonFetchUsers from './ButtonFetchUsers'

const API = 'https://randomuser.me/api/?results=1';

class App extends Component{

  state = {
    users: [],
  }

  handleDataFetch = () =>{
    //console.log("click");
    fetch(API)
    .then(response=>{
      if(response.ok) //sprawdzenie czy zwroci 200
      {
        //console.log(response);
        return response //jak zwroci to lecimy dalej
      }
      throw Error(response.status); //jak zwroci np 404 to wyrzuci error
    })
    .then(response=>response.json()) //wyodrebnia jsona z tego obiektu
    .then(data =>{
      const user = data.results;
      this.setState(prevState => (
        {
          users: prevState.users.concat(user),
        }
      ))
    })
    .catch(error=>console.log(error)) //przechwyci error i pokaze w konsoli
  }

  

  render(){

    const users = this.state.users;

    return(
      <div>    
        <ButtonFetchUsers click={this.handleDataFetch}/>
        {users.length>0 ? <UsersList users={users}/> : users}
      </div>
    )
  }
}

export default App;
