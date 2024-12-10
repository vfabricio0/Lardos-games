import React, { useState } from 'react';

function Pedido() {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState(1);

  const handlePedido = (e) => {
    e.preventDefault();
    console.log(`Pedido realizado: ${produto} - Quantidade: ${quantidade}`);
  };

  return (
    <div>
      <h2>Realizar Pedido</h2>
      <form onSubmit={handlePedido}>
        <input
          type="text"
          placeholder="Produto"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <button type="submit">Fazer Pedido</button>
      </form>
    </div>
  );
}

export default Pedido;
