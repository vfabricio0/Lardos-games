import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const jogos = [
    { id: 'eldenRing', nome: 'Elden Ring', capa: '/imagens/elden-ring-capa.jpg' },
    { id: 'shadowOfTheColossus', nome: 'Shadow of the Colossus', capa: '/imagens/shadow-colossus-capa.jpg' },
    { id: 'doom', nome: 'Doom', capa: '/imagens/doom-capa.jpg' },
  ];

  return (
    <div className="home-container">
      {/* Menu superior */}
      <header className="header">
        <h1 className="site-title">Lar dos Games</h1>
        <nav className="nav-bar">
          <Link to="/cadastro" className="nav-link">Cadastro</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/produtos" className="nav-link">Produtos</Link>
          <Link to="/pedido" className="nav-link">Pedido</Link>
          <Link to="/lista-pedidos" className="nav-link">Lista de Pedidos</Link>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className="main-content">
        <h2>Nossos Jogos</h2>
        <div className="jogos-grid">
          {jogos.map((jogo) => (
            <Link to={`/jogo/${jogo.id}`} key={jogo.id} className="jogo-card">
              <img src={jogo.capa} alt={`Capa de ${jogo.nome}`} />
              <h3>{jogo.nome}</h3>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
