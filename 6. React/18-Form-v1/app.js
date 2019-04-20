class Form extends React.Component{
  state = {
    city: "",
    text: "",
    isLoved: true,
    number: 0,
  }

  handleCityChange = (e) =>{
    this.setState({
      city: e.target.value,
    })
  }

  handleTextChange = () =>{
    this.setState({
      text: event.target.value,
    })
  }

  handleIsLovedChange = () =>{
    this.setState({
      isLoved: !this.state.isLoved,
    })
  }

  handleNumberChange(e){
    this.setState({
      number: e.target.value
    })
  }

  render(){
    return(
      <div>
        <label>
          Podaj miasto:
          <input value={this.state.city} onChange={this.handleCityChange} type="text"/>
        </label>

        <br/>
        <label>
        Napisz coś o tym mieście: 
        <textarea value={this.state.text} onChange={this.handleTextChange}></textarea>  
        </label>

        <br/>
        <label>
        Czy lubisz to miasto:
        <input type="Checkbox" onChange={this.handleIsLovedChange}checked={this.state.isLoved}/>
        </label>

        <br/>
        <label>
          Ile razy byłeś: 
          <select value={this.state.number} onChange={this.handleNumberChange.bind(this)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">więcej</option>
          </select>
        </label>

      </div>
    )
  }
}

ReactDOM.render(<Form/>,document.getElementById("root"));