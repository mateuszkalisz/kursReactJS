const Cloth = (props) => {
    return(
        <li key={props.id}>
            <span>{props.name}</span>
            <button onClick={props.delete.bind(this,props.id)}>Usuń</button>
        </li>
    )
}

class List extends React.Component{
    state={
        clothes: [
            {
                id: 1, name: "bluza",
            },
            {
                id: 2, name: "koszulka",
            },
            {
                id: 3, name: "tshirt",
            },
            {
                id: 4, name: "jeansy",
            },
        ]
    }

    handleDelete = (id) =>{
        let clothes = Array.from(this.state.clothes);
        clothes = clothes.filter(cloth => id !== cloth.id);
        console.log(clothes);
        this.setState({
            clothes,
        })
    }


    render(){

        return(
            <ul>
                {this.state.clothes.map(cloth => <Cloth 
                id={cloth.id} 
                name={cloth.name}
                delete={this.handleDelete}
                />)}
            </ul>
        )
    }
}

ReactDOM.render(<List/>, document.getElementById("root"));