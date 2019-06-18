import React from 'react';
import './App.css';
import Text from './Text';

class App extends React.Component{

  state ={
    underline: false,
  }

  render(){

  const text = "Witaj na stronie";
  // const text = "Witaj";

  // let classes = "";

  // if(this.state.underline){
  //   classes += " line";
  // }

  // if(text.length>5){
  //   classes += "big";
  // }

    const classes = ['one'];

    if(this.state.underline){
      classes.push(" line");
    }
    if(text.length>5){
      classes.push(" big");
    }

  return(
    <div className="app" onClick={()=>{this.setState({underline:!this.state.underline,})}}>
      <h1 className={classes.join(" ")}>{text}</h1>
      <Text/>
    </div>
  );
  }
}

export default App;
