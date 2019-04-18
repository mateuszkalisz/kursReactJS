const ListItems = (props) =>{
    
    const items = props.items.map(item=>
        <Item
        key={item.id}
        id={item.id}
        name={item.name}
        active={item.active}
        changeState={props.changeState}
        />
)
    
    return(
        <React.Fragment>
            <h1>Twoje zamówienie</h1>
        <ul>
            {items}
        </ul>
        </React.Fragment>
    )
}