import React from 'react';
import { ContextProvider } from './context';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './styles/App.scss';

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />} />
        <Route path='/Skills' element={<Portfolio/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
