import React, {Component} from 'react';
import './App.css';

//pseudo rosnąca baza danych
const data = [
  {
    id: 1, title: "wiadomość nr1", body: "zawartosc wiadomosci nr1...",
  },
  {
    id: 2, title: "wiadomość nr2", body: "zawartosc wiadomosci nr2...",
  },
  {
    id: 3, title: "wiadomość nr3", body: "zawartosc wiadomosci nr3...",
  }
]

setInterval(()=>{
  const index = data.length+1;
  data.push({
    id: index, title: `wiadomość nr${index}`, body: `zawartosc wiadomosci nr${index}...`,
  })
}, 7000);

class App extends Component{

  state = {
    comments: [...data],
  }

  getData = () =>{
    if(this.state.comments.length!==data.length){
      this.setState({
        comments: [...data],
      })
      console.log("akutalizacja")
    }
    else{
      console.log("dane takie same nie aktualizuje");
    }
  }

  componentDidMount(){
    this.idInterval = setInterval(this.getData, 1000)
    console.log("wywolanie component did mount");
  }

  componentWillUnmount(){
    clearInterval(this.idInterval);
  }

  render(){
    const comments = this.state.comments.map(comment=>(
      <div key={comment.id}>{comment.id}, {comment.title}, {comment.body}</div> 
    ))
    return (
      <div className="App">
    {comments.reverse()}
      </div>
    );
  }
}

export default App;
