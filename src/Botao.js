import React from 'react'

export default function Botao({titulo, 
                               onClicado}) {
  return (
    <button onClick={onClicado}>
      {titulo}
    </button>
  )
}
