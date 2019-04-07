const PositiveMessage = () =>{
  return(
<p>Możesz obejrzeć film! Zapraszamy :)</p>
  )
}

const NegativeMessage = () =>{
  return(
<p>Nie możesz obejrzeć tego filmu bo mas zmniej niż 18 lat!</p>
  )
}

class TicketShop extends React.Component{
  
state = {
  isConfirmed: false,
  isFormValidated: false,  
}

handleCheckboxChange = () =>{
  this.setState({
    isConfirmed: !this.state.isConfirmed,
    isFormValidated: false,
  })
}

handleFormValidated = (e) =>{
e.preventDefault();
if(!this.state.isFormValidated)
{
  this.setState({
    isFormValidated: true,
  })
}
}

displayMessage = () =>{
  if(this.state.isFormValidated)
  {
    if(this.state.isConfirmed) return <PositiveMessage/>
    else return <NegativeMessage/>
  }
  else return null;
}

  render(){
    return(
      <>
      <h1>Kup bilet na horror roku!</h1>
      <form onSubmit={this.handleFormValidated}>
      <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed} />
      <label htmlFor="age">Mam co najmniej 18 lat</label>
      <br/>
      <button type="submit">Kup bilet</button>
      </form>
      {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<TicketShop/>, document.getElementById("root"));