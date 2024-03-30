import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Copyfooter from './components/Copyfooter';
import Hero from './components/Hero';
import Planned from './components/Planned';
import Luxurious from './components/Luxurious';
import Visitus from './components/Visitus';

const App = () => {
  return (
    <>
    <div className="landing-page">
      <div className="header-com">
        <Navbar />
      </div>
      <div className="content-com">
        <Hero />
        <Planned />
        <Luxurious />
        <Visitus />
      </div>
      <div className="fotter-com">
        <Footer />
        <Copyfooter />
      </div>
    </div>
    </>
  )
}

export default App