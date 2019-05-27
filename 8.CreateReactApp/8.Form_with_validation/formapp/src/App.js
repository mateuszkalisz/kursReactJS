import React from 'react';
import './App.css';

class App extends React.Component{
  state={
    username: "",
    email: '',
    pass: '',
    accept: false,
    message: "",

    errors: {
      username: false,
      email: false,
      pass: false,
      accept: false, 
    }
  }

  messages={
    username_incorrect: "(Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji!)",
    email_incorrect: "(Brak @ w emailu)",
    pass_incorrect: "(Hasło musi miec 8 znaków!)",
    accept_incorrect: "(Niepotwierdzona zgoda!)",
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
    
    const validation = this.formValidation();
    
    if(validation.correct){
      this.setState({
        username: "",
        email: '',
        pass: '',
        accept: false,
        message: "formularz został wysłany",
        errors: {
      username: false,
      email: false,
      pass: false,
      accept: false, 
    }
      })
    console.log("formularz wyslany")
    }
    else{
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          pass: !validation.pass,
          accept: !validation.accept, 
        }
          }
      )
    }
  }   

  formValidation = () =>{
    //true ok form
    //false nok form
    
    let username = false;
    let email = false;
    let pass = false;
    let accept = false;
    let correct = false;

    if(this.state.username.length>10 && this.state.username.indexOf(" ") === -1)
    {
      username = true;
    }
    if(this.state.email.indexOf("@") !== -1)
    {
      email = true;
    }
    if(this.state.pass.length === 8){
      pass = true;
    }
    if(this.state.accept){
      accept = true;
    }
    if(username && email && pass && accept){
      correct = true;
    }

    return({
      username,
      pass,
      email,
      accept,
      correct,
    })

  }

  componentDidUpdate(){
    if(this.state.message !== ""){
      setTimeout(()=>{
        this.setState({
          message: "",
        })
      }, 3000)
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">Podaj imię:
            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}/>
            <span>{this.state.errors.username && this.messages.username_incorrect}</span>
          </label>
          <label htmlFor="email">Twoj e-mail:
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
            <span>{this.state.errors.email && this.messages.email_incorrect}</span>
          </label>
          <label htmlFor="password">Twoje hasło:
            <input type="password" id="password" name="pass" value={this.state.pass} onChange={this.handleChange}/>
            <span>{this.state.errors.pass && this.messages.pass_incorrect}</span>
          </label>
          <label htmlFor="accept">
            <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange}/>Wyrażam zgodę
          </label>
          <span>{this.state.errors.accept && this.messages.accept_incorrect}</span>

          <button>Zapisz się</button>
        </form>
        {this.state.message && <h3>{this.state.message}</h3>}
      </div>
    )
  }
}


export default App;
