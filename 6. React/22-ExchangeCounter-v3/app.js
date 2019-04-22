const Cash = (props) =>{
  const cash = (props.cash/props.ratio*props.price).toFixed(2);
  
  return(
  <div>
    {props.title} {cash}
  </div>
    )
}



class ExchangeCounter extends React.Component{

  state = {
    amount: "",
    product: "electricity"
  }

  static defaultProps = {
    currencies: [
      {
        id: 0,
        name: "zloty",
        ratio: 1,
        title: "Wartość w złotówkach"
      },
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
    ],
    prices: {
      electricity: .51,
      gas: 4.76,
      oranges: 3.79,
    }
  }

  handleChange = e =>{
    this.setState({
      amount: e.target.value,
    })
}

handleProductChange = (e) =>{
  this.setState({
    product: e.target.value,
  })
}

insertSuffix(select){
  if(select==="electricity"){
    return " kWh"
  }
  else if(select === "gas"){
    return " litrów"
  }
  else if(select ==="oranges"){
    return " kg"
  }
  else return null;
}

selectPrice(select){
  console.log(this.props.prices[select]);
return this.props.prices[select];
}

  render(){
    const {amount, product} = this.state;

    const price = this.selectPrice(product)
    
    const calculator = this.props.currencies.map(currency=>(<Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} price={price}/>))
    
    return(
      <div className="app">
      <label>
        Wybierz produkt:
        <select value={product} onChange={this.handleProductChange}>
          <option value="electricity">prąd</option>
          <option value="gas">benzyna</option>
          <option value="oranges">pomarańcze</option>
        </select>
        
        <br/>

      </label>
      <label>
        <input value={this.state.amount} onChange={this.handleChange} type="number"/>
        {this.insertSuffix(this.state.product)}
      </label>
      {calculator}
      {/* <Cash title="Wartość w dolarach " cash={amount} ratio={ratioDollar}/>
      <Cash title="Wartość w euro " cash={amount} ratio={ratioEuro}/> */}
      </div>
    )
  }
}

ReactDOM.render(<ExchangeCounter/>,document.getElementById("root"));