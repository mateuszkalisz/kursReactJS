import React from 'react';
import "./UsersList.css";

//sfc
const UsersList = props => {
    console.log(props.users);
    const users = props.users.map(user =>(
       <li key={user.login.uuid}>
       <img src={user.picture.large} alt={user.name.last}/>
       <h4>{`Użytkownik : ${user.name.title} ${user.name.last}`}</h4>
       <p>{user.email}</p>
       </li>
    ))
    return (  
        <ul className="users">
            <li>
                {users}
            </li>
        </ul>
    );
}
 
export default UsersList;


