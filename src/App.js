import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home/Home';  
import Todo from '../src/pages/Todo/Todo';  
import About from '../src/pages/AboutUs/AboutUs'; 
import AuthForm from './pages/AuthForm';
import IncrementPage from './pages/IncrementPage/incrementpage';
import Page1 from './pages/TogglePage/Page1';
import Page2 from './pages/TogglePage/Page2';


function App() {
  return (
    <div className="text-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/increment" element={<IncrementPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />

      </Routes>
    </div>
    
  );
}


export default App;



