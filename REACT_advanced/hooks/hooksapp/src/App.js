import React, {useState} from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent';
import HookComponent from './components/HookComponent';

function App() {

  const [selectedId, setSelectedId] = useState(1);

  const handleChangeId = () =>{
    const id = (Math.floor(Math.random()*4))+1;

    setSelectedId(id);
  }

  return (
    <div className="App">
      <button onClick={handleChangeId}>Zmien id</button>

      <ClassComponent id={selectedId}/>
      <HookComponent id={selectedId}/>
    </div>
  );
}

export default App;
