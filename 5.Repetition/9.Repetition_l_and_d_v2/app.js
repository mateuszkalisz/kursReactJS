const People = (props) =>{
    return(
<li key={props.id}>
    <span>{props.name}</span>
    <button onClick = {()=>props.delete(props.id)}>Usuń</button>
</li>
    )
}


class List extends React.Component{

    state = {
        people: [
            {
                id:1,
                name: "Jurek",
            },
            {
                id:2,
                name: "Marek",
            },
            {
                id:3,
                name: "Ambroży",
            },

        ]
    }

    handleDelete = (id) =>{
        let people = [...this.state.people];
        const index = people.findIndex(person => person.id === id);
        
        people.splice(index,1);

        this.setState({
            people,
        })

    }

    render(){

        const humans = this.state.people.map(person =>(
            <People 
            id = {person.id}
            name = {person.name}
            delete={this.handleDelete}
            /> )
        )

        return(
            <div>
                {humans}
            </div>
        )
    }
}

ReactDOM.render(<List/>,document.getElementById("root"));