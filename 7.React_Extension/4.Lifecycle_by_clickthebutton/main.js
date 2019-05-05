class App extends React.Component{

    state = {
        status: true,
    }


    componentDidMount(){
        console.log("Aplikacja zamontowana");
    }

    componentDidUpdate(){
        console.log("Aplikacja aktualizowana");
    }

    render(){
        return(
            <div>
            <button onClick={()=>this.setState({
                status: !this.state.status,
            })}>Kliknij</button>
            <h1>{`${this.state.status}`}</h1>
            <Child1 status={String(this.state.status)}/>
            {this.state.status ? <Child2/> : null} 
            </div>

        )
    }

}

class Child1 extends React.Component{

    componentDidMount(){
        console.log("Aplikacja zamontowana Child1");
    }

    componentDidUpdate(){
        console.log("Aplikacja aktualizowana Child1");
    }


    render(){
        return(
            <h1>{this.props.status}</h1>
        )
    }
}

class Child2 extends React.Component{

    componentDidMount(){
        console.log("Aplikacja zamontowana Child2");
    }

    componentDidUpdate(){
        console.log("Aplikacja aktualizowana Child2");
    }

    componentWillUnmount(){
        console.log("komponent Child2 odmontowany")
    }


    render(){
        return(
            <div>Komponent zamontowany Child2</div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));