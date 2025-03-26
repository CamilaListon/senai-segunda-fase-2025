import './Calculadora.css';
import { useState } from 'react';

function Calculadora() {
  const [peso, setPeso] = useState("");
  const [gramas, setGramas] = useState(null);
  const [quilogramas, setQuilogramas] = useState(null);
  const [libras, setLibras] = useState(null);
  const [oncas, setOncas] = useState(null);

  function calculadoraDePesos() {
    let entrada = parseFloat(peso);

    if (isNaN(entrada) || entrada < 0) {
      alert("Por favor, insira um número válido.");
      return;
    }

    setGramas((entrada * 1000).toFixed(2));
    setQuilogramas(entrada);
    setLibras((entrada * 2.20462).toFixed(2));
    setOncas((entrada * 35.274).toFixed(2));
  }

  return (
    <div className="container-calculadora">
      <h2>Calculadora de Peso</h2>

      <input
        type="number"
        placeholder="Digite o peso em KG"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        className="calcPeso"
      />
      <div>
        <button onClick={calculadoraDePesos}>Converter</button>
      </div>
      
      {gramas !== null && (
        <div>
          <p>Peso em Gramas: <strong>{gramas} g</strong></p>
          <p>Peso em Quilogramas: <strong>{quilogramas} kg</strong></p>
          <p>Peso em Libras: <strong>{libras} lb</strong></p>
          <p>Peso em Onças: <strong>{oncas} oz</strong></p>
        </div>
      )}
    </div>
  );
}

export default Calculadora;
