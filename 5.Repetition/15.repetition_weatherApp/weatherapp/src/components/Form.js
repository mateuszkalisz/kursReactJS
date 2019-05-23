import React from 'react';

const Form = (props) =>{
    return(
<form>
    <input 
    value={props.value} onChange={props.change} placeholder="wpisz miasto" type="text"/>
</form>
    )
}

export default Form;