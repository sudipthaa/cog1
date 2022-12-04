import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Routes, Route } from "react-router-dom"


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }

{/* <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="register" element={ <Register/> } />
      </Routes>

*/}

    </div>
    
  );
}

export default App;