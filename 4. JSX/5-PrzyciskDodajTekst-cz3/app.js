//Przycisk - po kliknięciu dodawana jest litera do tekstu

class App extends React.Component{
  state ={
    text: "",
  }

  handleClick =() =>{
    const number = Math.floor(Math.random()*10);
    this.setState({
      text: this.state.text += number,
    })
  }

  handleClear=()=>{
    this.setState({
      text: "",
    })
  }

  render(){
    const btnName = "stworz liczbę";
    return(
      <>
      <button onClick ={this.handleClick}>{btnName}</button>
      <button onClick ={this.handleClear}>{this.props.btnClear}</button>
      <PanelResult text = {this.state.text}/>
      </>
    )
  }
}

const PanelResult = (props) =>{
  return <h1>{props.text}</h1>
}


ReactDOM.render(<App btnTitle = "Dodaj cyfrę" btnClear ="Usuń cyfry"/>, document.getElementById("root"));