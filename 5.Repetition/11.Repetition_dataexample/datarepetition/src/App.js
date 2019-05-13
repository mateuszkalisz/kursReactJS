import React,{Component} from 'react';
import './App.css';

const data = [
  {
    id: 1, title: `tytul 1`, body:`tekst 1`
  },
  {
    id: 2, title: `tytul 2`, body: `tekst 2`
  }
]

setInterval(()=>{
  const index = data.length+1;
  data.push({id: index, title: `tytul ${index}`, body: `tekst ${index}` } )
  console.log(data);
},4000)


class App extends Component{

  state = {
    elements: [...data],
  }

  getElement = () =>{
    this.setState({
      elements: [...data],
    })
  }

  componentDidMount(){
    this.idI = setInterval(this.getElement,3000)
  }

  componentWillUnmount(){
    clearInterval(this.idI);
  }

  render(){
    const elements = this.state.elements.map(element=>(
      <div key={element.id}>{element.id}, {element.title}, {element.body}</div>
    ))
  return (
    <div className="App">
{elements.reverse()}
    </div>
  );
}
}

export default App;
