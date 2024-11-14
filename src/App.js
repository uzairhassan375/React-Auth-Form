import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home/Home';  
import Todo from '../src/pages/Todo/Todo';  
import About from '../src/pages/AboutUs/AboutUs'; 
import AuthForm from './pages/AuthForm';


import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </div>
    
  );
}


export default App;



