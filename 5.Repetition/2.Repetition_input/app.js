class App extends React.Component{
    state ={
        text: "",
    }

    handleInputValue = (e) =>{
        this.setState({
            text: e.target.value
        })
    }

    handleClearButton = () =>{
        this.setState({
            text: "",
        })
    }

    render(){

        return(
            <React.Fragment>
                <input value={this.state.text} onChange={this.handleInputValue} placeholder="wpisz cos" type="text"/>
                <button onClick={this.handleClearButton}>Wyczyść</button>
                <h1>{this.state.text}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));