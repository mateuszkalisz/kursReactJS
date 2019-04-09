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

  render(){
    return (
      <>
      <button onClick={this.handleRemoveFromCart} disabled={this.state.shoppingCart ? false : true} >-</button>
      <span>{this.state.shoppingCart}</span>
      <button onClick={this.handleAddToCart} disabled={this.state.shoppingCart === this.state.availableProducts}>+</button>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));