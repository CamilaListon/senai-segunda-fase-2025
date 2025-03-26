import './Conversao.css';
import { useState } from 'react';

function Conversao() {
  const [real, setReal] = useState("");
  const [dolar, setDolar] = useState(null);

  function converterRealPraDolar() {
    let entrada = parseFloat(real);
    if (isNaN(entrada) || entrada < 0) {
      alert("Por favor, insira um número válido.");
      return;
    }

    setDolar((entrada * 0.1731).toFixed(2));
  }

  return (
    <div className="container-conversao">
      <h2>Conversor de Real para Dólar</h2>

      <input
        type="number"
        placeholder="Digite o valor em R$"
        value={real}
        onChange={(e) => setReal(e.target.value)}
        className="valorReal"
      />
      <div>
        <button onClick={converterRealPraDolar}>Converter</button>
      </div>
      {dolar !== null && (
        <p>
          Valor convertido: <strong>U$ {dolar}</strong>
        </p>
      )}
    </div>
  );
}

export default Conversao;
