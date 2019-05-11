import React, {Component} from 'react';
import './App.css';
import SwitchButton from "./SwitchButton"
import ClearButton from './ClearButton';


class App extends Component{

  state = {
    time: 0,
    active: false,
  }

  clearButton=()=>{
    this.setState({
      time: 0,
    })
  }

  addSecond=()=>{
    this.setState({
      time: this.state.time+1,
    })
  }

  handleClick=()=>{

    if(this.state.active){
      clearInterval(this.idInterval);
    }
    else{
      this.idInterval = setInterval(()=> this.addSecond(),1000);
    }

    this.setState({
      active: !this.state.active,
    })
  }

  render(){
    return (
      <>
       <p>{this.state.time}</p>
       <SwitchButton click={this.handleClick} active={this.state.active}/>
       <ClearButton click={this.clearButton}/>

      </>
    )
  }
}

export default App;
