const ListItems = (props) =>{

    const items = props.items.map(item => 
    <Item
    key={item.id}
    name={item.name}
    active={item.active}/>);

    return(
        <React.Fragment>
        <h3>Twoje zamówienie</h3>
        <ul>
            {items}
        </ul>
        </React.Fragment>
    )
}