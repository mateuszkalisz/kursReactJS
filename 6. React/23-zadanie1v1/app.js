class App extends React.Component{

    state = {
       prediction: "",
       newPrediction: "", 
    }

    static defaultProps = {
        predictions: [
            "wróżba1",
            "wróżba2",
            "wróżba3"
        ]
    }

    handleShowPredition = () =>{

        const randomIndex = Math.floor(Math.random()*this.props.predictions.length);
        const randomPrediction = this.props.predictions[randomIndex];
        console.log(randomPrediction);

        this.setState({
            prediction: randomPrediction,
        })
    }

    handleNewPrediction = (e)=>{
        this.setState({
            newPrediction: e.target.value,
        })
    }

    handleAddNewPredtictionToArray = () =>{
        if(this.state.newPrediction!=="")
        {
            this.props.predictions.push(this.state.newPrediction);
            alert(`Zostałą dodana nowa wróżba: ${this.state.newPrediction}, aktualnie w zbiorze wróżb znajdują się: ${this.props.predictions}`);
            
            this.setState({
                newPrediction: "",
            })
        }
        else return null;
    }

    render(){
        return(
            <>
            <button onClick={this.handleShowPredition}>Zobacz wróżbę</button>
            <br/>
            <label>
                <input value={this.state.newPrediction} onChange={this.handleNewPrediction} type="text"/>
                <button onClick={this.handleAddNewPredtictionToArray}>Dodaj wróżbę</button>
            </label>
            <br/>
            {this.state.prediction ? <h1>{this.state.prediction}</h1> : null}
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));