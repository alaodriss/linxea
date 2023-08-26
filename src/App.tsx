import React from 'react';
import './App.css'
import Accueil from './pages/Accueil';
import Footer from './compoments/footer/Footer';
import Header from './compoments/header/Header';
function App() {
  return (
    <>
        <Header />
           <Accueil/>
        <Footer />
    </>
  );
}

export default App;
