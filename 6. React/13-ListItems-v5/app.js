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

  state={
    select: "all",
  }


  handleUsersFilter = (option) =>{
    this.setState({
      select: option,
    })
  }

  usersList = () =>{
    let users = this.props.data.users;
    switch(this.state.select){
      case "all": {
        return users.map((user)=> <Item user={user} key={user.id}/>)
      }
      case "female":{       
        users =  users.filter(user=>user.sex==="female");
        return  users = users.map((user)=> <Item user={user} key={user.id}/>);
      }

      case "male":{       
        users =  users.filter(user=>user.sex==="male");
        return  users = users.map((user)=> <Item user={user} key={user.id}/>);
      }
      default:
      {
        return "brak danych";
      }
    }
  }

render(){

  return(
    <>
    <button onClick={this.handleUsersFilter.bind(this,"all")}>Wszyscy</button>
    <button onClick={this.handleUsersFilter.bind(this,"female")}>Kobiety</button>
    <button onClick={this.handleUsersFilter.bind(this,"male")}>Mężczyźni</button>
    {this.usersList()}
    </>
  )
}
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))
