class Form extends React.Component{

  state = {
    name: "Romek",
    content: "To dobry ziomek",
    children: 0,
    married: false,
  }

  handleStateChange = (e) =>
  {
    if(e.target.name=="married")
    {
      this.setState({
        [e.target.name]: e.target.checked,
      })
    }
    else{
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
  }

  render(){
    return(
        <div>
          <label>
            Podaj imie
            <input name="name" value={this.state.name} type="text" onChange={this.handleStateChange}/>
          </label>

          <br/>

          <label>
            Napisz coś o sobie
            <textarea name="content" value={this.state.content} onChange={this.handleStateChange} cols="50" rows="5"></textarea>
          </label>

          <br/>

          <label>
            Ile ma dzieci
            <select name="children" value={this.state.children} onChange={this.handleStateChange}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="more">więcej</option>

            </select>
           </label>

          <br/>
            <label>
              Czy jest po ślubie
              <input name="married" onChange={this.handleStateChange} checked={this.state.married} type="Checkbox"/>
            </label>



        </div>
    )
  }
}

ReactDOM.render(<Form/>, document.getElementById("root"));