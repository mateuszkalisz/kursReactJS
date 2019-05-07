class App extends React.Component{

    state = {
        active: true,
    }

    handleClick = ()=>{
        this.setState({
            active: !this.state.active,
        })
    }

    render(){
        return(
            <div>
                <SwitchButton active={this.state.active} click={this.handleClick}/>
                {this.state.active && <Clock/>}

            </div>
        )
    }
}

const SwitchButton = (props) =>{
    return(
        <button onClick={props.click}>{props.active ? "Wyłącz": "Włącz"}</button>
    )
}
        
class Clock extends React.Component{

    interval = ""
    
    state={
        time: this.getTime()
    }

    getTime(){
        const currentTime = new Date();
        return(
            {
                hours: currentTime.getHours(),
                minutes: currentTime.getMinutes(),
                seconds: currentTime.getSeconds(),
            }
        ) 
    }

    setTime(){
        const time = this.getTime();
        this.setState({
            time: time,
        })
    }

    componentDidMount(){
        console.log("Zegarek zamontowany");
        this.interval = setInterval(this.setTime.bind(this) , 1000);
    }

    componentWillUnmount(){
        console.log("Zegarek wymontowany");
        clearInterval(this.interval);
    }
    
    render(){

        const {hours,minutes,seconds} = this.state.time

        return(
            <div>
                {hours} : {minutes} : {seconds}
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));