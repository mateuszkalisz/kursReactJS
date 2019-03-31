class App extends React.Component{
    state = {
        text: "",
    }

    handleAddNumber = () =>{
        const randomNumber = Math.floor(Math.random()*10);
        this.setState(
            {
                text: this.state.text += randomNumber,
            }
        )
    }

    handleClearNumber = () =>{
        this.setState(
            {
                text: "",
            }
        )
    }

    render(){
        return(
            <>
            <button onClick={this.handleAddNumber}>Dodaj cyfrę</button>
            <button onClick={this.handleClearNumber}>Usuń cyfry</button>
            <TextContent text ={this.state.text}/>
            </>
        )
    }
}

const TextContent = (props) =>{
    return(
        <h1>{props.text}</h1>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));