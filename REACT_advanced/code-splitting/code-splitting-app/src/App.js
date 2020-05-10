import React, {Suspense, useState} from 'react';
import './App.css';
const ComponentA = React.lazy(()=> import('./ComponentA'));
// import ComponentA from './ComponentA';

function App() {

  const [showComp, setShowComp] = useState(false);

  return (
    <div className="App">
      <button onClick={()=>setShowComp(!showComp)}>{showComp ? 'Hide Component' : 'Show Component'}</button>
      <Suspense fallback={<div>ComponentA is loading...</div>}>
      {showComp && <ComponentA/>}
      </Suspense>
    </div>
  );
}

export default App;
