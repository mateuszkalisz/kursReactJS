class App extends React.Component{
    state = {
        number: 0,
    }

    // handleClick = () =>{
    //     this.setState({
    //         number: this.state.number+1,
    //     })

    //     this.setState({
    //         number: this.state.number+2,
    //     })

    //     this.setState({
    //         number: this.state.number+3,
    //     })

    //     console.log(this.state.number)
    // }

    handleClick = () =>{
        this.setState(prevState=>({
            number: prevState.number+1,
        }))

        this.setState(prevState=>({
            number: prevState.number+2,
        }))

        this.setState(prevState=>({
            number: prevState.number+3,
        }))

        console.log(this.state.number);
        
    }


    render(){
        return(
            <React.Fragment>
            <h1>{this.state.number}</h1>
            <button onClick={this.handleClick}>Klik</button>
            </React.Fragment>
        )
    }

}

ReactDOM.render(<App/>,document.getElementById("root"));