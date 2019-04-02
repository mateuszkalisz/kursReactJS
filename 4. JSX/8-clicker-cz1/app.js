class Counter extends React.Component{

  state = {
    count: 0,
    result: this.props.result,
  }


  handleMathClick(type, number=1){
    //debugger;
    if(type==="substraction"){
      this.setState(prevState =>({
        count: prevState.count+1,
        result: prevState.result-number,
      }))
    }
    else if(type==="addition"){
      this.setState(prevState =>({
        count: prevState.count+1,
        result: prevState.result+number,
      }))
    }
    else if(type==="reset"){
      this.setState(prevState =>({
        count: prevState.count+1,
        result: this.props.result,
      }))
    }
  }

  render(){
    return(
      <React.Fragment>
      <button onClick={this.handleMathClick.bind(this, "addition", 10)}>+10</button>
      <button onClick={()=>this.handleMathClick("addition")}>+1</button>
      <button onClick={this.handleMathClick.bind(this, "substraction",1)}>-1</button>
      <button onClick={this.handleMathClick.bind(this, "substraction", 10)}>-10</button>
      <button onClick={this.handleMathClick.bind(this, "reset")}>Resetuj wynik</button>
      <h1>Liczba kliknięć: {this.state.count}</h1>
      <h1>Wynik: {this.state.result}</h1>
      </React.Fragment>
    )
  }
}

const startValue = 0;
ReactDOM.render(<Counter result={startValue}/>,document.getElementById("root"));