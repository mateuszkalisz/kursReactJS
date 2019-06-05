import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

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

const ErrorPage = () =>{
  return(
    <h1>Strona nie istnieje</h1>
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
              <li><NavLink exact activeClassName="home_selected" to="/">Start </NavLink></li>
              <li><NavLink activeClassName="contact_selected" to="/contact">Contact</NavLink></li>
              <li><NavLink activeClassName="news_selected" 
              activeStyle={{
                backgroundColor: 'black',
                letterSpacing: '6px',
              }} 
              to="/news">News</NavLink></li>
          </ul>
        </nav>
      </header>
      <section>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/news" component={News}/>
          <Route component={ErrorPage}/>
        </Switch>
      </section>
      </div>
      </Router>
    )
  }
}


export default App;

//Link - odpowiada za zmiane url bez odswiezania strony
//NavLink - jak wyzej + dodanie klasy do komponentu ktory ma zgodna sciezke z url
//BrowserRouter (as Router) - opakowanie w ktorym bedziemy chcieli uzywac React Router
//Route - jesli chcemy wyswietlic jakis komponent po zmianie url
//Switch - opakowanie dla Route'ow dzieki ktoremu zostanie wykonany tylko! jeden route dokladnie ten ktory chcemy i nie bedzie przeszukiwac pozostalych 
