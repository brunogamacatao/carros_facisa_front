import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  // quando o componente for carregado
  useEffect(() => {
    // acessa a lista de alunos do backend
    axios.get('http://localhost:5000/alunos').then((response) => {
      // pega a resposta do servidor e coloca no array de alunos
      setAlunos(response.data);
    });
  }, []);

  const renderAluno = (a) => {
    return (
      <li>{a.nome} - {a.curso} - CRE: {a.cre}</li>
    );
  };

  return (
    <>
      <h3>Alunos Cadastrados:</h3>
      <ol>
        {alunos.map(renderAluno)}
      </ol>
    </>
  )
}
