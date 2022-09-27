import React from 'react';
import { ContextProvider } from './context';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './styles/App.scss';

function App() {

  const location = useLocation();

  return (
    <ContextProvider>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Skills' element={<Portfolio />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </ContextProvider>
  );
}

export default App;
