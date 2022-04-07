import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import Registeration from './components/Registeration';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registeration />} />

        </Routes>
      </div>
    </>
  );
}

export default App;