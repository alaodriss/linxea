import React from 'react';
import './App.css'
import Accueil from './pages/Accueil';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './compoments/footer/Footer';
import Header from './compoments/header/Header';
import Scpi from './pages/Scpi';
import AssuranceVie from './pages/AssuranceVie';
import Retraite from './pages/Retraite';
import {Formlient} from './utiles/Form/FormClient';

function App() {
  return (
    <>

   <BrowserRouter>
      <Header />
        <Routes>
        <Route   path="/" element={<Accueil/>} />
          <Route  path="/Assurance" element={<AssuranceVie/>} />
          <Route  path="/SCPI" element={<Scpi/>} />
          <Route path="/Retraite" element={<Retraite/>} />
           {/** link Form Client  */}
          <Route path="/Formclient" element={<Formlient/>} />

        </Routes>
   </BrowserRouter>
   <Footer />
    </>
  );
}

export default App;
