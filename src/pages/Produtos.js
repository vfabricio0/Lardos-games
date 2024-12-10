import React from 'react';

const produtos = [
  { id: 1, nome: 'Elden Ring', preco: 199.99 },
  { id: 2, nome: 'Shadow of the Colossus', preco: 149.99 },
  { id: 3, nome: 'Doom', preco: 99.99 },
];

function Produtos() {
  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;
