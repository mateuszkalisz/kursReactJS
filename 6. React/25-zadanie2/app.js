const Person = (props) => {
  return(
<li key={props.id}>
<span>{props.name}</span>
<button onClick={props.click}>Usuń</button>
</li>
  )
}

class List extends React.Component{

  state = {
    users: [
      {
        id: 10, name: "Kasia",
      },
      {
        id: 20, name: "Asia",
      },
      {
        id: 30, name: "Basia",
      },
      {
        id: 40, name: "Wojtek",
      },
    ]
  }

  handleRemoveUser = (id) =>{

    const persons = [...this.state.users];

    const index = persons.findIndex(person => person.id === id);

    persons.splice(index,1);

    this.setState({
      users: persons,
    })

  }

  render(){

    const people = this.state.users.map(user=> <Person 
      key={user.id} 
      name={user.name} 
      click={()=>this.handleRemoveUser(user.id)}/>)

    return(
      <ul>
        {people}
      </ul>
    )
  }
}

ReactDOM.render(<List/>,document.getElementById("root"));