import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Registeration from './components/Registeration';
import Login from './components/Login';


function App() {
  return (
    <>
      <div className="App">
        <div className="outer">
          <div className="inner">
            {/* <Login /> */}
            <Registeration />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;