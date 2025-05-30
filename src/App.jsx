import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header/header';
import Home from './pages/Home';
import Historia from './pages/Historia/historia';
import Clima from './pages/Clima/clima';
import Footer from './pages/Rodape/footer';
import TurismoUser from './pages/Turismo-user/turismoUser';
import DetalhesTurismo from './pages/DetalhesTurismo/detalhesTurismo';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home/>
                <Historia/>
                <Clima/>
                <Footer/>
              </>
            }
          />
         <Route path="/turismo" element={<TurismoUser/>} />
          <Route path="/detalhes" element={<DetalhesTurismo/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
