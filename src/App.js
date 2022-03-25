import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Registeration from './components/Registeration';



function App() {
  return (
    <>
      <div className="App">
        <div className="outer">
          <div className="inner">
            <Registeration />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;