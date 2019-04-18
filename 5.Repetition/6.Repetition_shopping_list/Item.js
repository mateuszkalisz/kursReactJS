const Item = (props) =>{
    return(
        <li className={props.active===true ? "enabled" : "disabled"} onClick={()=>props.changeState(props.id)}>{props.name}</li>
    )
}