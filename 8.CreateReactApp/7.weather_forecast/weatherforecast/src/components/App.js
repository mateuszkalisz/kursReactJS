import React from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

//klucz do api
const APIKey = '9eb8b97f5a8153c8d6e21336aff61af4'

class App extends React.Component{
  
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: ""
  }

  handleInputChange = e =>{
    this.setState({
      value: e.target.value,
    })
  }

  handleCitySubmit = e =>{
    e.preventDefault();
    console.log("Potwierdzony formularz");

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`

    fetch(API)
    .then(response=>{
      if(response.ok){
        return response;
      }
      throw Error(response.status)
    })
    .then(response => response.json())
    .then(result =>{
      const time = new Date().toLocaleString();
      this.setState({
        err: false,
        date: time,
        sunrise: result.sys.sunrise,
        sunset: result.sys.sunset,
        temp: result.main.temp,
        pressure: result.main.pressure,
        wind: result.wind,
        city: this.state.value,
      })
    })
    .catch(err => console.log("Nie udało się. " + err))
    this.setState({
      err: true,
    })

  }
  
  render(){
    return (
      <div>
        <Form 
        value={this.state.value} 
        change={this.handleInputChange}
        submit={this.handleCitySubmit}
        />
        <Result error={this.state.err}/>
      </div>
    )
  }
}

export default App;
