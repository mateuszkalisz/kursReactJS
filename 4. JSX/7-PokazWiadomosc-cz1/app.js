class Message extends React.Component{

constructor(props){
  super();

  this.state = {
    messageIsActive: false,
  }
  this.handleMessageButton = this.handleMessageButton.bind(this);

}

handleMessageButton(){
  this.setState({
    messageIsActive: !this.state.messageIsActive,
  })
}

  render(){
    console.log(this.state.messageIsActive)

    const text = "wiadomość blablabla...";

    return(
      <>
      <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? "Ukryj" : "Pokaż"}</button>
      {/* {this.state.messageIsActive ? <p>{text}</p> : null} */}
      {/* <p>{this.state.messageIsActive && text}</p>  /////po lewej jesli bedzie false, po prawej jesli true (jesli jest pusty react radzi sobie z tym i nie wyrzuca błędu, po prostu nic sie nie dzieje) */}
      {this.state.messageIsActive && <p>{text}</p>}
      </>
    )
  }
}

ReactDOM.render(<Message/>, document.getElementById("root"));