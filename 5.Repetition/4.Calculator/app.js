class Calculator extends React.Component{

    state = {
        number1: 0,
        number2: 0,
        result: 0,
        firstNumberIsActive: false,
    }

    handleNumberButton = (value) =>{

        if(this.state.firstNumberIsActive === false){
            this.setState(prevState=>({
                number1: value,
                firstNumberIsActive: !this.state.firstNumberIsActive,
            }))
        }
        else if(this.state.firstNumberIsActive ===true){
            this.setState(prevState=>({
                number2: value,
                firstNumberIsActive: !this.state.firstNumberIsActive,
            }))
        }
    }

    handleMathOperation = (type) =>{
        if(type==="+")
        {
            this.setState({
                result: (this.state.number1+this.state.number2),
            })
        }
        else if(type==="-")
        {
            this.setState({
                result: (this.state.number1-this.state.number2),
            })
        }
        else if(type==="*")
        {
            this.setState({
                result: (this.state.number1*this.state.number2),
            })
        }
        else if(type==="/")
        {
            this.setState({
                result: (this.state.number1/this.state.number2).toFixed(2),
            })
        }
        else if(type==="clear")
        {
            this.setState({
                number1: 0,
                number2: 0,
                result: 0,
            })
        }
    }

    render(){
        return(
            <React.Fragment>
            <NumberButton
            name="1"
            number={1}
            click={this.handleNumberButton}
            />
            <NumberButton
            name="2"
            number={2}
            click={this.handleNumberButton}
            />
            <NumberButton
            name="3"
            number={3}
            click={this.handleNumberButton}
            />
            <br/>
            <NumberButton
            name="4"
            number={4}
            click={this.handleNumberButton}
            />
            <NumberButton
            name="5"
            number={5}
            click={this.handleNumberButton}
            />
            <NumberButton
            name="6"
            number={6}
            click={this.handleNumberButton}
            />
            <br/>
            <NumberButton
            name="7"
            number={7}
            click={this.handleNumberButton}
            />
            <NumberButton
            name="8"
            number={8}
            click={this.handleNumberButton}
            />
            <NumberButton
            name="9"
            number={9}
            click={this.handleNumberButton}
            />
            <br/>
            <MathButton
            name="+"
            click={this.handleMathOperation}
            type="+"
            />
            <MathButton
            name="-"
            click={this.handleMathOperation}
            type="-"
            />
            <MathButton
            name="*"
            click={this.handleMathOperation}
            type="*"
            />
            <MathButton
            name="/"
            click={this.handleMathOperation}
            type="/"
            />
            <br/>
            <MathButton
            name="wyczyść"
            click={this.handleMathOperation}
            type="clear"
            />

            <ResultPanel
            result={this.state.result}
            number1={this.state.number1}
            number2={this.state.number2}
            />

            </React.Fragment>
        )
    }
}

const NumberButton = (props) => {
    return(
        <button onClick={()=>props.click(props.number)}>{props.name}</button>
    )
}

const MathButton = (props) => {
    return(
        <button onClick={()=>props.click(props.type)}>{props.name}</button>
    )
}

const ResultPanel = (props) =>{
    return(
        <>
        <h2>Pierwsza liczba to: {props.number1}</h2>
        <h2>Druga liczba to: {props.number2}</h2>
        <h1>Wynik to: {props.result}</h1>
        </>
    )
}


ReactDOM.render(<Calculator/>, document.getElementById("root"));