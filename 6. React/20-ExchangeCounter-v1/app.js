// const Dollars = (props) =>
// (
  
//   <div>Wartość w dolarach: {props.cash<=0 ? 0 : (props.cash / props.ratio).toFixed(2)} $</div>
// )

// const Euros = (props) =>(
//   <div>Wartość w euro: {props.cash<=0 ? 0 : (props.cash / props.ratio).toFixed(2)} euro </div>
// )

const Cash = (props) =>{
  const cash = (props.cash/props.ratio).toFixed(2);
  
  return(
  <div>
    {props.title} {cash}
  </div>
    )
}



class ExchangeCounter extends React.Component{

  state = {
    amount: "",
    ratioDollar: 3.6,
    ratioEuro: 4.2,
  }

  handleChange = e =>{
    this.setState({
      amount: e.target.value,
    })
}

  render(){
    const {amount, ratioDollar, ratioEuro} = this.state;
    return(
      <div className="app">
      <label>
        <input value={this.state.amount} onChange={this.handleChange} type="number"/>
      </label>
      {/* <Dollars cash={amount} ratio={ratioDollar}/>
      <Euros cash={amount} ratio={ratioEuro}/> */}
      <Cash title="Wartość w dolarach " cash={amount} ratio={ratioDollar}/>
      <Cash title="Wartość w euro " cash={amount} ratio={ratioEuro}/>
      </div>
    )
  }
}

ReactDOM.render(<ExchangeCounter/>,document.getElementById("root"));