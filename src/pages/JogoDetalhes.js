import React from 'react';
import { useParams } from 'react-router-dom';
import './JogoDetalhes.css';

// Dados dos jogos
const jogos = {
  eldenRing: {
    nome: 'Elden Ring',
    sinopse: 'Explore um vasto mundo repleto de desafios e mistérios em Elden Ring.',
    capa: '/imagens/elden-ring-capa.jpg',
    gameplay: '/imagens/elden-ring-gameplay.jpg',
  },
  shadowOfTheColossus: {
    nome: 'Shadow of the Colossus',
    sinopse: 'Derrote colossos gigantescos em uma jornada épica.',
    capa: '/imagens/shadow-colossus-capa.jpg',
    gameplay: '/imagens/shadow-colossus-gameplay.jpg',
  },
  doom: {
    nome: 'Doom',
    sinopse: 'Enfrente hordas demoníacas neste clássico jogo de tiro.',
    capa: '/imagens/doom-capa.jpg',
    gameplay: '/imagens/doom-gameplay.jpg',
  },
};

const JogoDetalhes = () => {
  const { id } = useParams();
  const jogo = jogos[id];

  if (!jogo) {
    return <div>Jogo não encontrado!</div>;
  }

  return (
    <div className="jogo-detalhes">
      <h1>{jogo.nome}</h1>
      <img src={jogo.capa} alt={`Capa de ${jogo.nome}`} className="jogo-capa" />
      <p>{jogo.sinopse}</p>
      <img src={jogo.gameplay} alt={`Gameplay de ${jogo.nome}`} className="jogo-gameplay" />
    </div>
  );
};

export default JogoDetalhes;
