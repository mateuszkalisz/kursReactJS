import React,{Component} from 'react';
import '../styles/App.css';
import Header from '../comps/Header';

class App extends Component{
render(){
  return(
    <div className='wrapper'>
      <Header/>
    </div>
  )
}
}

export default App;
