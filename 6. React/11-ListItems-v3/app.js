const data = {
  users: [{
    id: 1,
    name: "Arek",
    age: 29,
    sex: "male"
  },
  
  {
    id:2,
    name: "Mateusz",
    age: 25,
    sex: "male"
  },
  
  {
    id:3,
    name: "Ania",
    age: 40,
    sex: "female"
  },

  {
    id:4,
    name: "Stasia",
    age: 20,
    sex: "female"
  }
]
}

const Item = ({user}) => {

  return(
    <div className="userInfo">
      <h1>Użytkownik {user.name}</h1>
      <p>Id uzytkownika {user.id}</p>
      <p>Wiek uzytkownika {user.age}</p>
      <p>Plec {user.sex}</p>
    </div>
  )
}


class ListItems extends React.Component {

state = {
    usersChoice: 0,
  }

handleWomenChoice = () =>{
  this.setState({
    usersChoice: 1,
  })
}

handleMenChoice = () =>{
  this.setState({
    usersChoice: 2,
  })
}

handleAllChoice = () =>{
  this.setState({
    usersChoice: 0,
  })
}


render(){
  
  let users = this.props.data.users;

  if(this.state.usersChoice===0){
    users = users;
  }
  else if(this.state.usersChoice===1){
    users = users.filter(user=>user.sex==="female")
  }
  else if(this.state.usersChoice===2){
    users = users.filter(user=>user.sex==="male")
  }


  const items = users.map(user=><Item key={user.id} user={user}/>)
  return(
    <>
    <button onClick={this.handleWomenChoice}>Pokaż kobiety</button>
    <button onClick={this.handleMenChoice}>Pokaż mężczyzn</button>
    <button onClick={this.handleAllChoice}>Pokaż wszystkich</button>
    <ul>
      {items}
    </ul>
    </>
  )
}
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))
