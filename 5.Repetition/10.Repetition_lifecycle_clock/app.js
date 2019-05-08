class App extends React.Component{
    state = {
        active: true,
    }

    handleClick = () => {
        this.setState({
            active: !this.state.active,
        })
    }

    render(){

        const {active} = this.state;

        return(
            <div>
            {active && <Clock/>}
            <button onClick={this.handleClick}>{active ? "Wyłącz" : "Włącz"}</button>
        </div>
        )
    }
}

class Clock extends React.Component{

    index = ""

    state = {
        time: this.getTime(),
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

        const time=this.getTime();

        this.setState({
            time: time, 
        })
    }


    componentDidMount(){
        console.log("zamontowane");
        this.index = setInterval(this.setTime.bind(this),1000);
    }

    componentWillUnmount(){
        console.log("wymontowane");
        clearInterval(this.index);
    }




    render(){

        const {hours,minutes,seconds} = this.state.time;

        return(
            <div>
                {hours} : {minutes>9 ? minutes :`0${minutes}`} : {seconds>9 ? seconds :`0${seconds}`}
            </div>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById("root"));