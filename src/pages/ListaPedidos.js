import React from 'react';

const pedidos = [
  { id: 1, produto: 'Elden Ring', quantidade: 1 },
  { id: 2, produto: 'Shadow of the Colossus', quantidade: 2 },
];

function ListaPedidos() {
  return (
    <div>
      <h2>Meus Pedidos</h2>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            Produto: {pedido.produto} - Quantidade: {pedido.quantidade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPedidos;
