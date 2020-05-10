import React from 'react';
import { ReactQueryConfigProvider } from 'react-query'

import './App.css';
import Pokemon from './Pokemon';


const queryConfig = {
  suspense: true
}

function App() {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
    <div className="App">
      <React.Suspense fallback={"ladowanie danych..."}>
      <Pokemon/>
      </React.Suspense>
    </div>
    </ReactQueryConfigProvider>
  );
}

export default App;
