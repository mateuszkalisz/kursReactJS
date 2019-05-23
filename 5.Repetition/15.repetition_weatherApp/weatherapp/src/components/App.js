import React from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

const ApiKey = "9eb8b97f5a8153c8d6e21336aff61af4"

class App extends React.Component{

  state ={
    value: "",
    date: "",
    city: "",
    temperature: "",
    sunrise: "",
    sunset: "",
    error: "",
  }

  handleInputValue = (e) =>{
    this.setState({
      value: e.target.value,
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.value.length===0) return;
    if(prevState.value!==this.state.value)
    {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${ApiKey}&units=metric`;

      fetch(API)
      .then(response=>{
        if(response.ok){
          return response;
        }
        throw Error(response.status);
      })
      .then(response=>response.json())
      .then(data=>{
        const time = new Date().toLocaleString();
        this.setState({
          date: time,
          city: this.state.value,
          temperature: data.main.temp,
          error: false,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
        })
      })
      .catch(err =>
        this.setState(prevState=>({
          error: true,
          city: prevState.value,
        }))
      );
    }
  }

  render(){

    const {value, date, city, temperature, sunrise, sunset, error} = this.state;

    return(
      <div>
        <Form change={this.handleInputValue} value={value}/>
        <Result city={city} date={date} temperature={temperature} sunrise={sunrise} sunset={sunset} error={error} />
      </div>
    )
  }
}


export default App;
