import React,{Component} from 'react';

class App extends Component{

  state ={
    active: false,
  }


  handleChange = () =>{
    this.setState({
      active: !this.state.active,
    })
  }

  render(){

    // const btn = {
    //   off: {
    //     border: '2px solid black',
    //     padding: '10px 20px',
    //     fontFamily: 'arial',
    //     fontSize: '30px',
    //     display: 'block',
    //     margin: '20px auto',
    //     backgroundColor: 'white',
    //   },
    //   on: {
    //     border: '2px solid red',
    //     padding: '10px 20px',
    //     fontFamily: 'arial',
    //     fontSize: '30px',
    //     fontWeight: 'bold',
    //     display: 'block',
    //     margin: '20px auto',
    //     backgroundColor: 'yellow',
    //     color: 'red',
    // }}

    let btn = {
        border: '3px solid black',
        padding: '10px 20px',
        fontFamily: 'arial',
        fontSize: '30px',
        display: 'block',
        margin: '20px auto',
        backgroundColor: 'white',
    }

    if(this.state.active){
      btn.border = "2px solid red";
      btn.backgroundColor ='yellow';
      btn.color = "red";
      btn.fontWeight = "bold";
    }

    return(
      <div>
        <button style={btn} onClick={this.handleChange}>{!this.state.active ? "Włącz" : "Wyłącz"}</button>
      </div>
    );
  }
}

export default App;
