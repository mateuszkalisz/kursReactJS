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
    // ratioDollar: 3.6,
    // ratioEuro: 4.2,
  }

  currencies = [
    {
      id: 1,
      name: "dollar",
      ratio: 3.6,
      title: "Wartość w dolarach"
    },
    {
      id: 2,
      name: "euro",
      ratio: 4.2,
      title: "Wartość w euro"
    },
    {
      id: 3,
      name: "pound",
      ratio: 4.8,
      title: "Wartość w funtach"
    },
  ]

  handleChange = e =>{
    this.setState({
      amount: e.target.value,
    })
}

  render(){
    const {amount} = this.state;
    
    const calculator = this.currencies.map(currency=>(<Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount}/>))
    
    return(
      <div className="app">
      <label>
        <input value={this.state.amount} onChange={this.handleChange} type="number"/>
      </label>
      {calculator}
      {/* <Cash title="Wartość w dolarach " cash={amount} ratio={ratioDollar}/>
      <Cash title="Wartość w euro " cash={amount} ratio={ratioEuro}/> */}
      </div>
    )
  }
}

ReactDOM.render(<ExchangeCounter/>,document.getElementById("root"));