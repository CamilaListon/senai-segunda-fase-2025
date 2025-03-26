import './Conversao2.css';
import { useState } from 'react';

function Conversao2() {
  const [km, setKm] = useState("");
  const [milhas, setMilhas] = useState(null);
  const [leguas, setLeguas] = useState(null);

  function converterKmParaMilha() {
    let entrada = parseFloat(km);

    if (isNaN(entrada) || entrada < 0) {
      alert("Por favor, insira um número válido.");
      return;
    }

    setMilhas((entrada * 0.6214).toFixed(2));
    setLeguas((entrada * 0.207).toFixed(2));
  }

  return (
    <div className="container-conversao2">
      <h2>Conversor de Distância KM / Leguas</h2>

      <input
        type="number"
        placeholder="Digite a distância em KM"
        value={km}
        onChange={(e) => setKm(e.target.value)}
        className="valorDist"
      />

      <div clasName="botaoConversDist">
        <button onClick={converterKmParaMilha}>Converter</button>
      </div>

      {milhas !== null && leguas !== null && (
        <div>
          <p>Distância original: <strong>{km} km</strong></p>
          <p>Convertido: <strong>{milhas} Milhas</strong></p>
          <p>Convertido: <strong>{leguas} Léguas</strong></p>
        </div>
      )}
    </div>
  );
}

export default Conversao2;
