const Header = (props) =>{

    const items = props.items.filter(item=>item.active===true);

    return(
    <React.Fragment>
    <h1>Wielkość zamówienia: {items.length}</h1>
    <h1>Do zapłaty: {items.length*10}</h1>
    </React.Fragment>
    )
}