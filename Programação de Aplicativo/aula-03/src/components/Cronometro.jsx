import React, { useState, useEffect } from 'react';
import './Cronometro.css'; 

function Cronometro() {
  const [tempo, setTempo] = useState(0); 
  const [emExecucao, setEmExecucao] = useState(false); 
  const [intervalo, setIntervalo] = useState(null); 

  function iniciar() {
    if (!emExecucao) {
      const novoIntervalo = setInterval(() => {
        setTempo(prevTempo => prevTempo + 1); 
      }, 1000);
      setIntervalo(novoIntervalo);
      setEmExecucao(true);
    }
  }

  function pausar() {
    clearInterval(intervalo); 
    setEmExecucao(false);
  }

  function resetar() {
    clearInterval(intervalo); 
    setTempo(0); 
    setEmExecucao(false);
  }

  const horas = Math.floor(tempo / 3600);
  const minutos = Math.floor((tempo % 3600) / 60);
  const segundos = tempo % 60;

  useEffect(() => {
    return () => {
      if (intervalo) {
        clearInterval(intervalo);
      }
    };
  }, [intervalo]);

  return (
    <div className="container-cronometro">
      <h2>Cronômetro</h2>

      <div className="tempo-display">
        <span>{String(horas).padStart(2, '0')}:</span>
        <span>{String(minutos).padStart(2, '0')}:</span>
        <span>{String(segundos).padStart(2, '0')}</span>
      </div>

      <div className="controle-cronometro">
        <button onClick={iniciar} disabled={emExecucao}>Iniciar</button>
        <button onClick={pausar} disabled={!emExecucao}>Pausar</button>
        <button onClick={resetar}>Resetar</button>
      </div>
    </div>
  );
}

export default Cronometro;
