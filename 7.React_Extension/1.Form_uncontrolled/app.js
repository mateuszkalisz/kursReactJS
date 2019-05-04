class App extends React.Component{


    //1sposób
    // handleSumbit = () =>{
    //     event.preventDefault();
    //     const name = this.refs.username.value;
    //     this.refs.username.value = "";
    //     return name;
    // }


    //2 sposób
    handleSumbit = (e) =>{
        e.preventDefault();
        const name = e.target.elements.userNameForm.value;
        e.target.elements.userNameForm.value = "";
    }


    render(){
        return(
            <form onSubmit={this.handleSumbit}>
            <input
            type="text"
            placeholder="wpisz imię"
            name="userNameForm"
     
            //dla 2 sposobu

            //dla 1 sposobu
            ref="username"
            defaultValue="Mateusz"/>
            <button type="sumbit">Potwierdź</button>
        </form>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));