import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';

const Home = () =>{
  return(
    <h1>Strona startowa</h1>
  );
}

const News = () =>{
  return(
    <h1>Aktualności</h1>
  )
}

const Contact = () =>{
  return(
    <h1>Kontakt do nas</h1>
  )
}

class App extends React.Component{
  render(){
    return(
      <Router>
      <div>
      <header>
        <nav>
          <ul>
            {/* <li><a href="/">Start</a></li>
            <li><a href="/news">Aktualności</a></li>
            <li><a href="/contact">Kontakt</a></li> */}
              <li><Link to="/">Start</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/news">News</Link></li>
          </ul>
        </nav>
      </header>
      <section>
          <Route path="/" exact component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/contact" component={Contact}/>
      </section>
      </div>
      </Router>
    )
  }
}


export default App;
