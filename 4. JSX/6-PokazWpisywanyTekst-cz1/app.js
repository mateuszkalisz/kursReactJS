class App extends React.Component{
  state ={
    text: "",
  }

  handleInputChange = (e) =>{
    //console.log(e.target.value);
    this.setState({
      text: e.target.value,
    })
  }

  handleClearText (){
    this.setState({
      text: "",
    })

  }

  render(){
    return(
      <React.Fragment>
      <input value={this.state.text} placeholder="wpisz..." onChange={this.handleInputChange} type="text"/>
      <button onClick = {this.handleClearText.bind(this)}>Reset</button>
      <h1 className = "title">{this.state.text.toUpperCase()}</h1>
    </React.Fragment>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));