// import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Team from './components/Team'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Shop from './components/Shop';

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Menu" element={<Menu />} />
         <Route path="/Contact" element={<Contact />} />
         <Route path="/Shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;