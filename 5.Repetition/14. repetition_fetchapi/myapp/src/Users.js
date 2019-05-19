import React from 'react';

const Users = props => {
    
    const users = props.users.map(user =>{
        return(
            <li key={user.login.uuid}>
            <h1>{`${user.name.title} ${user.name.first}`}</h1>
            <img src={user.picture.large} alt={user.name.last}/>
            </li>
        )
    })
    
    return (  
        <ul className="users">
            <li>
                {users}
            </li>
        </ul>
    );
}

export default Users;