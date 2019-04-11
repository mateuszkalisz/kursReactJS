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
    id:3,
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

render(){
  let users = this.props.data.users;
  users = users.filter(user=>user.sex==="female")
  const items = users.map(user=><Item key={user.id} user={user}/>)
  return(
    <ul>
      {items}
    </ul>
  )
}
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))
