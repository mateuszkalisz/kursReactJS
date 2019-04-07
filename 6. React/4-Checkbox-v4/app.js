const ValidationMessage = (props) =>{
  const {txt} = props;
  return(
    <p>{txt}</p>
  )
}


// const PositiveMessage = () =>{
//   return(
// <p>Możesz obejrzeć film! Zapraszamy :)</p>
//   )
// }

// const NegativeMessage = () =>{
//   return(
// <p>Nie możesz obejrzeć tego filmu bo mas zmniej niż 18 lat!</p>
//   )
// }

const Orderform = (props) =>{
  const {submit,checked, change} = props
  return(
    <form onSubmit={submit}>
    <input type="checkbox" id="age" onChange={change} checked={checked} />
    <label htmlFor="age">Mam co najmniej 18 lat</label>
    <br/>
    <button type="submit">Kup bilet</button>
    </form>
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
    if(this.state.isConfirmed) return <ValidationMessage txt="Możesz obejrzeć film! Zapraszamy" />
    else return <ValidationMessage txt="Nie możesz obejrzeć tego filmu bo mas zmniej niż 18 lat!"/>
  }
  else return null;
}

  render(){

    const {isConfirmed, isFormValidated} = this.state;


    return(
      <>
      <h1>Kup bilet na horror roku!</h1>
      <Orderform 
      change={this.handleCheckboxChange} 
      submit={this.handleFormValidated} 
      checked={isConfirmed}/>
      {/* <form onSubmit={this.handleFormValidated}>
      <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={isConfirmed} />
      <label htmlFor="age">Mam co najmniej 18 lat</label>
      <br/>
      <button type="submit">Kup bilet</button>
      </form> */}
      {this.displayMessage(isConfirmed, isFormValidated)}
      </>
    )
  }
}

ReactDOM.render(<TicketShop/>, document.getElementById("root"));