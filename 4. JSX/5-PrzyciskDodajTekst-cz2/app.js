//Przycisk - po kliknięciu dodawana jest litera do tekstu

class App extends React.Component{
  constructor(props){
  super(props);
  this.state = {
    text: ""
  }
//przypisujemy do handleClick ktora jest w konstruktorze handleClick ktore znajduje sie w prototypie i bindujemy this ktore jest w konstruktorze
  this.handleClick = this.handleClick.bind(this);
 }

  // state ={
  //   text: "",
  // }

  handleClick(){
    const letter = "a";
    this.setState({
      text: this.state.text += letter,
    })
  }

  handleClear()
{
  //funkcja asynchroniczna
  this.setState(()=>({
      text: "",
  })
  )
}

   render(){
    return(
      <>
      {/*<button onClick ={this.handleClick.bind(this)}>Dodaj "A"</button>*/}
      <button onClick ={this.handleClick}>Dodaj "A"</button>
      <button onClick ={this.handleClear.bind(this)}>Usuń wszystko</button>
      <h1>{this.state.text}</h1>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));