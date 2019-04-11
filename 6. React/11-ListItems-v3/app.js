const data = {
  users: [{
    id: 1,
    name: "Arek",
    age: 29,
  },
  
  {
    id:2,
    name: "Mateusz",
    age: 25,
  },
  
  {
    id:3,
    name: "Jurek",
    age: 40,
  }
]
}

const Item = ({user}) => {

  return(
    <div>
      <h1>Użytkownik {user.name} o id {user.id} ma lat {user.age}</h1>
    </div>
  )
}

class ListItems extends React.Component {

render(){
  const users = this.props.data.users;
  const items = users.map(user=><Item key={user.id} user={user}/>)
  return(
    <ul>
      {items}
    </ul>
  )
}
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))
