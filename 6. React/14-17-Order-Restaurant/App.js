class App extends React.Component {
    state = {
        items: [
            {id: 1, name: "herbata", active: true},
            {id: 2, name: "ziemniaki", active: false},
            {id: 3, name: "kasza", active: true},
            {id: 4, name: "zupa", active: true},
            {id: 5, name: "chleb", active: false},
            {id: 6, name: "maslo", active: true}
        ]
      }

      handleChangeStatus = (id) =>{

        const items = this.state.items.map(item=>{
            if(id === item.id) {
                item.active = !item.active;
            }
            return item;
        })

        this.setState({
            items: items,
        })  

      }


    render() { 
        return(
            <React.Fragment>
                <Header items={this.state.items}/>
                <ListItems items={this.state.items} changeStatus={this.handleChangeStatus}/>
            </React.Fragment>
        );
    }
}