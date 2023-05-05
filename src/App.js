import axios from 'axios';

import Cabecalho from './Cabecalho';
import ListaDeCarros from './ListaDeCarros';
import Contador from './Contador';

import { useEffect, useState } from 'react';

function App() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/carros').then((response) => {
      setCarros(response.data);
    });

  }, []);

  // Esse componente é uma bagunça, ele mostra vários componentes
  // diferentes desenvolvidos em sala de aula.
  return (
    <>
      <Cabecalho/>
      <ListaDeCarros carros={carros}/>
      <hr/>
      <Contador/>
    </>
  );
}

export default App;
