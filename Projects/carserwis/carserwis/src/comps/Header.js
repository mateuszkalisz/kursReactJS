import React from 'react';
import '../styles/Header.css';

class Header extends React.Component{
    render(){
        return(
            <header className="clearfix">
            <div className="logo">
                <div className="img"></div>
                <div className="logoName">Auto-Serwis</div>
            </div>
            <div className="menu clearfix">
                <ul>
                    <li><a href="#">Strona główna</a></li>
                    <li><a href="#">Oferta</a></li>
                    <li><a href="#">O mnie</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </div>
            </header>
        )
    }
}

export default Header;