class Counter extends React.Component{

  state = {
    count: 0,
    result: this.props.result,
  }


  handleMathClick = (type, number=1) =>{
    //debugger;
    if(type==="subtraction"){
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
      
      <MathButton 
       name="-10"
       number="10"
       type="subtraction" 
       click={this.handleMathClick}
       />
      <MathButton 
       name="-1"
       number="1" 
       type="subtraction" 
       click={this.handleMathClick}
       />
      <MathButton 
       name="+1"
       number="+1"
       type="addition" 
       click={this.handleMathClick}
       />
      <MathButton 
       name="+10"
       number="10"
       type="addition" 
       click={this.handleMathClick}
       />
      <MathButton 
       name="reset"
       type="reset" 
       click={this.handleMathClick}
       />

      <ResultPanel
        name="Liczba kliknięć:"
        name2="Wynik:"
        count={this.state.count}
        result={this.state.result}
      />
      </React.Fragment>
    )
  }
}

const MathButton = (props) => {
  const number = parseInt(props.number);
  return(
    <button onClick={()=>props.click(props.type, number)}>{props.name}</button>
  )
}

const ResultPanel = (props) =>{
  return(
    <>
    <h1>{props.name} {props.count} {props.count>=10 ? <p>Przeciążenie procesora!</p>:null}</h1>
    <h1>{props.name2} {props.result}</h1>
    </>
  )
}

const startValue = 0;
ReactDOM.render(<Counter result={startValue}/>,document.getElementById("root"));