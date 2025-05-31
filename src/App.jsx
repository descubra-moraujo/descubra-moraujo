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
import PrincipaisTurismo from './pages/principaisTurismo/principaisTurismo';
import Login from './pages/Login/login';
import Painel from './pages/AreaAdmin/Painel';
import CriarTurismo from './pages/CriarTurismo/criarTurismo';
import ListarTurismo from './pages/ListarTurismo/listarTurismo';

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
                <PrincipaisTurismo/>
                <Historia/>
                <Clima/>
                <Footer/>
              </>
            }
          />
            <Route path="/turismo" element={<TurismoUser/>} />
            <Route path="/detalhes" element={<DetalhesTurismo/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/painel" element ={ <Painel/>} />
            <Route path="/adicionar" element={<CriarTurismo/>} />
            <Route path="/listar" element={<ListarTurismo/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
