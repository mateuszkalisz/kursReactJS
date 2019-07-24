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
        const text = "blablabla wiadomosc";

        return(
            <>
            <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? "Ukryj":"Pokaż"}</button>
            {this.state.messageIsActive && <p>{text}</p>}
            </>
        )
    }
}

ReactDOM.render(<Message/>, document.getElementById("root"));