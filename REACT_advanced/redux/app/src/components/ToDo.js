import React from 'react';

const ToDo = ({text, complete, onClick}) =>{
    return(
        <li onClick={onClick} style={{textDecoration: complete ? 'line-through' : 'none'}}>
            {text}
        </li>
    )
};

export default ToDo;