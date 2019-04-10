// Warunkowe dodanie przycisku i obsługa stanu magazynu (availableProducts)
// Wyszarzenie liczby 0 - css
// destrukturyzacja

class App extends React.Component{
  state = {
    availableProducts: 7,
    shoppingCart: 0,
  }

  handleRemoveFromCart = () => {
      this.setState({
        shoppingCart: this.state.shoppingCart - 1,
    })
  }

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart +1,
    })
  }

  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0,
    })
  }

  render(){

    const {shoppingCart, availableProducts} = this.state;

    console.log(availableProducts)

    const style = shoppingCart === 0 ? {opacity: 0.3} : null

    return (
      <>
      <button onClick={this.handleRemoveFromCart} disabled={shoppingCart ? false : true} >-</button>
      
      <span style={style}>{shoppingCart}</span>
      
      <button onClick={this.handleAddToCart} disabled={shoppingCart === availableProducts}>+</button>
      {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));