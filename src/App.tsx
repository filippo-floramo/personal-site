import React from 'react';
import { ContextProvider } from './context';
import { Routes, Route } from "react-router-dom"
import Hero from './components/Hero/HeroIndex';
import Navbar from './components/Navbar/Navbar';
import './styles/App.scss';

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />}/>
      </Routes>
    </ContextProvider>
  );
}

export default App;
