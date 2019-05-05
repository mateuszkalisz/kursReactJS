class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            number: 0,
        }
        console.log("wywołana metoda constructor");
    }


handleClick = () =>{
    this.setState({
        number: this.state.number +1,
    })
}

    //metoda nie zalecana juz teraz w nowych aktualizacjach react ale dla wiedzy:
    //wywoluje sie przed render
componentWillMount(){
    console.log("wywolana metoda componentWillMount");
}

//wykonana raz po wykonaniu render
componentDidMount(){
    console.log("wywolanie metody componentDidMount");
    this.setState({
        number: 1,
    })
}

//wykona sie po aktualizacji state (po ponownym wywolaniu render)
componentDidUpdate(){
    console.log("wywolanie metody componentDidUpdate");
}

    render(){
        console.log("wywolana metoda render");
        return(
            <p>
                lifecycle
                <button onClick ={this.handleClick}>Klik</button>
                <Child/>
            </p>
        )
    }
}

class Child extends React.Component{
    
    componentDidMount(){
        console.log("wywolanie componentDidMount w komponencie dziecka");
    }
    
    render(){
        console.log("wywolanie metody render w dziecku");
        return(
            <h1>Dziecko</h1>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));