import React, { useState } from 'react';
import Botao from './Botao';

export default function Contador() {
  const [contagem, setContagem] = useState(0);

  const incrementa = () => {
    setContagem(contagem + 1);
  };

  const decrementa = () => {
    setContagem(contagem - 1);
  };

  return (
    <>
      <h2>Contador Feito Utilizando States</h2>
      <h3>
        Contagem: {contagem} &nbsp;
        <Botao titulo="+" onClicado={incrementa}/>
        &nbsp;
        <Botao titulo="-" onClicado={decrementa}/>
      </h3>
    </>
  )
}
