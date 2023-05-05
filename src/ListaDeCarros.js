import React from 'react'
import Carro from './Carro'

export default function ListaDeCarros({carros}) {
  const renderCarro = (c) => {
    return (
      <Carro carro={c}/>
    )
  };

  return (
    <div className='lista_de_carros'>
      {carros.map(renderCarro)}
    </div>
  )
}
