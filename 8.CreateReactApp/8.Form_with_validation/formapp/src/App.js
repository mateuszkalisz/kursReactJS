import React from 'react';
import './App.css';

class App extends React.Component{
  state={
    username: "",
    email: '',
    pass: '',
    accept: false,
  }
  
  handleChange = (e) =>{

    const type = e.target.type;
    const name = e.target.name;

    if(type === "text" || type==="email" || type==="password")
    {
      const value = e.target.value;
      this.setState({
        [name] : value,
        })
    }
    else if(type==="checkbox"){
      const checked = e.target.checked;
      this.setState({
        [name] : checked,
      })
    }
    }

  handleSubmit = (e) =>{
    e.preventDefault();
  }   

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">Twoje imię:
            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}/>
          </label>
          <label htmlFor="email">Twoj e-mail:
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
          </label>
          <label htmlFor="password">Twoje hasło:
            <input type="password" id="password" name="pass" value={this.state.pass} onChange={this.handleChange}/>
          </label>

          <label htmlFor="accept">
            <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange}/>Wyrażam zgodę
          </label>

          <button>Zapisz się</button>
        </form>
      </div>
    )
  }
}


export default App;
