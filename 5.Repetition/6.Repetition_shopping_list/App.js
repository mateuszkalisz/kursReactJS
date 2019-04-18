class App extends React.Component{
    
    state = {
        items: [
            {
                id: 1,
                name: "buty",
                active: false,
            },
            {
                id: 2,
                name: "szorty",
                active: true,
            },
            {
                id: 3,
                name: "bluza",
                active: true,
            },
            {
                id: 4,
                name: "spodnie",
                active: false,
            },
            {
                id: 5,
                name: "koszulka",
                active: true,
            }
        ]
    }

    handleChoiceItem = (id) =>{
        const items = this.state.items.map(item=>{
            if(id === item.id)
            {
                item.active = !item.active;
            }
            return item;
        })
        this.setState({
            items: items,
        })
    }
    
    render(){
        return(
            <React.Fragment>
                <Header items={this.state.items}/>
                <ListItems items={this.state.items} changeState={this.handleChoiceItem}/>
            </React.Fragment>
        )
    }
}