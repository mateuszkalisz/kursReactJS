import React from 'react';

const LoginPage = () =>{
return(
    <div>
        <label htmlFor="login">Podaj login
            <input name="login" type="text"/>
        </label>

        <label htmlFor="pass">Podaj hasło
            <input name="pass" type="password"/>
        </label>
        <button>Zaloguj</button>
    </div>
)
}

export default LoginPage;
