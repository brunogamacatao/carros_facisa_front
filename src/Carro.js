import React from 'react'

export default function Carro({carro}) {
  return (
    <div class="card carro">
      <img class="card-img-top" src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2023-onix/colorizer/01-images/colorizer-onix-my23-azul-seeker-3-4-frente.jpg?imwidth=960"/>
      <div class="card-body">
        <h5 class="card-title">{carro.montadora} {carro.nome}</h5>
        <p class="card-text">R$ {carro.preco}</p>
        <a href="#" class="btn btn-primary">Ver Detalhe</a>
      </div>
    </div>
  )
}
