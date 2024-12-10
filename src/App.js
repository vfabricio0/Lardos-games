import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Produtos from './pages/Produtos';
import Pedido from './pages/Pedido';
import ListaPedidos from './pages/ListaPedidos';
import JogoDetalhes from './pages/JogoDetalhes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/lista-pedidos" element={<ListaPedidos />} />
        <Route path="/jogo/:id" element={<JogoDetalhes />} />
      </Routes>
    </Router>
  );
};

export default App;
