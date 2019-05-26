import React, {Component} from 'react';
import './App.css';

class App extends Component{
  
  state = {
    username: '',
    email: '',
    pass: '',
    accept: false,
    message: '',

    error: {
      username: false,
      email: false,
      pass: false,
      accept: false,
    }
  }

  messages = {
    username_incorrect: "(Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji!)",
    email_incorrect: "(Brak @ w emailu)",
    pass_incorrect: "(Hasło musi miec 8 znaków!)",
    accept_incorrect: "(Niepotwierdzona zgoda!)",
  }

  handleChange = (e) =>{
    
    const name = e.target.name;
    const type = e.target.type;

    if(type==="text" || type==="email" || type==="password")
    {
      const value = e.target.value;
      this.setState({
        [name]: value,
      })
    }
    else{
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      })
    }
  }

  handleSubmitForm = (e)=>{
    e.preventDefault();
    console.log("działa");

    const validation = this.formValidation();
    
    if(validation.isCorrect){
      this.setState({
        username: "",
        email: '',
        pass: '',
        accept: false,
        message: "formularz został wysłany",
        error: {
      username: false,
      email: false,
      pass: false,
      accept: false, 
    }
      })
    }

    else{
      this.setState({
        error: {
          username: !validation.usernameV,
          email: !validation.emailV,
          pass: !validation.passV,
          accept: !validation.acceptV, 
        }
          }
      )
    }
  } 

  formValidation = () =>{
    let usernameV = false;
    let emailV = false;
    let passV = false;
    let acceptV = false;
    let isCorrect = false;

    const {username, email, pass, accept} = this.state;

    if(username.length>10 && username.indexOf(" ") === -1 ){
      usernameV = true;
    }
    if(email.indexOf("@") !== -1)
    {
      emailV = true;
    }
    if(pass.length>8){
      passV = true;
    }
    if(accept){
      acceptV = true;
    }
    if(usernameV && emailV && passV && acceptV)
    {
      isCorrect = true;
    }

    return(
      {
        usernameV,
        emailV,
        passV,
        acceptV,
        isCorrect,
      }
    )
  }

  componentDidUpdate(){
    if(this.state.message !== ''){
      setTimeout( ()=>{
        this.setState({
          message: '',
        })
      },3000)
    }
  }

  
  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmitForm} noValidate>
        <label htmlFor="username"> Imię 
          <input id="username" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          <span>{this.state.error.username && this.messages.username_incorrect}</span>
        </label>
        <label htmlFor="email"> Podaj email 
          <input id="email" type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
        <span>{this.state.error.username && this.messages.email_incorrect}</span>
        </label>
        <label htmlFor="pass"> Podaj hasło  
          <input id="pass" type="password" name="pass" value={this.state.pass} onChange={this.handleChange}/>
          <span>{this.state.error.pass && this.messages.pass_incorrect}</span>
        </label>
        <label htmlFor="accept"> Zaznacz jeśli wyrażasz zgodę i czytałeś <strong>regulamin</strong>  
          <input id="accept" type="checkbox" name="accept" checked={this.state.accept} onChange={this.handleChange}/>
        <span>{this.state.error.accept && this.messages.accept_incorrect}</span>
        </label>

        <button>Wyślij formularz</button>
      </form>

      <p>{this.state.message && this.state.message}</p>
      </div>
    )
  }
}

export default App;
