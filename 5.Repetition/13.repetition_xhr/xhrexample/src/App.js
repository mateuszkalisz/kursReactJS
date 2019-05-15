import React from 'react';
import './App.css';

class App extends React.Component{

  state={
    albums: []
  }

  componentDidMount(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/albums',true);
      
    xhr.onload=()=>{
        console.log(xhr.status);
        if(xhr.status===200){
        const albums = JSON.parse(xhr.response);
        this.setState({
          albums: albums,
        })
      }
    }
    xhr.send(null);
  }

  render(){

    const albums = this.state.albums.map(album=><div key={album.id}>{album.userId} {album.title}</div>)

    return (
      <div>
    {albums}
      </div>
    );
  }
}

export default App;
