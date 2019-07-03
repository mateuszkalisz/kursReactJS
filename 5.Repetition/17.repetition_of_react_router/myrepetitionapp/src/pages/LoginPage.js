import React from 'react';


const LoginPage = () => {
    return (
        <div>

            <h1>Panel logowania użytkownika</h1>
            <label htmlFor="login"> Podaj login
                <input name="login" type="text"/>
            </label>
            <br/>
            <label htmlFor="pass"> Podaj hasło
                <input name="pass" type="password"/>
            </label>
        </div>
    );
}
 
export default LoginPage;