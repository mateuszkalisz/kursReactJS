//Przycisk - po kliknięciu dodawana jest litera do tekstu

class App extends React.Component{
  state ={
    text: "",
  }

  handleClick =() =>{
    const letter = "a";
    this.setState({
      text: this.state.text += letter,
    })
  }

  handleClear=()=>{
    this.setState({
      text: "",
    })
  }

  render(){
    return(
      <>
      <button onClick ={this.handleClick}>Dodaj "A"</button>
      <button onClick ={this.handleClear}>Usuń całość</button>
      <h1>{this.state.text}</h1>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));