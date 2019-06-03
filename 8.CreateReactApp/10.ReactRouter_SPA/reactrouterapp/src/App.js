import React from 'react';
import './App.css';
import {BrowserRouter, Link, } from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <div>
      <header>
        <nav>
          <ul>
            {/* <li><a href="/">Start</a></li>
            <li><a href="/news">Aktualności</a></li>
            <li><a href="/contact">Kontakt</a></li> */}
              <li><Link to="/">Start</Link></li>
              <li><Link to="/contact">Contant</Link></li>
              <li><Link to="/news">News</Link></li>
          </ul>
        </nav>
      </header>
      <section>
        Strona - witaj
      </section>
      </div>
      </BrowserRouter>
    )
  }
}


export default App;
