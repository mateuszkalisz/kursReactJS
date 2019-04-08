const ValidationMessage = (props) =>{
    return <p>{props.txt}</p>
}

const TicketForm = (props) => {
    const {change, click, checked} = props;
    return(
        <>
        <form>
        <input onChange={change} id="inputCheckBox" type="checkbox" checked={checked} ></input>
        <label htmlFor="inputCheckBox" >Mam skończone 18 lat</label>
        <br/>
        <button onClick={click}>Kup bilet</button>
        </form>
        </>
    )
}


class TicketShop extends React.Component{
    
    state={
        isConfirmed: false,
        isSubmited: false,
    }
    
    handleCheckBoxChanged = () =>{
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isSubmited: false,
        })
    }

    handleFormValidation = (e) =>{
        e.preventDefault();
        this.setState({
            isSubmited: true,
        })
    }

    displayMessage = (isConfirmed, isSubmited) => {
        
        if(isSubmited)
        {
            if(isConfirmed)
            {
                return(
                    <ValidationMessage txt="Brawo, udało Ci się kupić bilet!"/>
                )
            }
            else{
                return(
                    <ValidationMessage txt="Wróć jak będziesz miał 18 lat!"/>
                )
            }
        }
        else return null;

    } 

    render(){

        const {isConfirmed, isSubmited} = this.state;

        return(
            <>
            <h1>Kup bilet na horror!</h1>
            <TicketForm
             change={this.handleCheckBoxChanged}
              click={this.handleFormValidation}
               checked={this.state.isConfirmed}
            />

            {this.displayMessage(isConfirmed, isSubmited)}

            </>
        )
    }
}

ReactDOM.render(<TicketShop/>,document.getElementById("root"));