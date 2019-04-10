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
    console.log(this.state.availableProducts)

    const style = this.state.shoppingCart === 0 ? {opacity: 0.3} : null

    return (
      <>
      <button onClick={this.handleRemoveFromCart} disabled={this.state.shoppingCart ? false : true} >-</button>
      
      <span style={style}>{this.state.shoppingCart}</span>
      
      <button onClick={this.handleAddToCart} disabled={this.state.shoppingCart === this.state.availableProducts}>+</button>
      {this.state.shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));