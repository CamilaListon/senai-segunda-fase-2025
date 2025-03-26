import { useState } from "react";
import "./ConversorEnergia.css";

function ConversorEnergia() {
    const [valor, setValor] = useState("");
    const [unidadeEntrada, setUnidadeEntrada] = useState("J");
    const [unidadeSaida, setUnidadeSaida] = useState("cal");
    const [resultado, setResultado] = useState("");

    const fatoresConversao = {
        J: { J: 1, cal: 0.239, kWh: 2.7778e-7 },
        cal: { J: 4.184, cal: 1, kWh: 1.1622e-6 },
        kWh: { J: 3.6e6, cal: 860420, kWh: 1 },
    };

    const converterEnergia = () => {
        if (!valor || isNaN(valor)) {
            alert("Digite um valor numérico válido!");
            return;
        }
        const valorConvertido = (valor * fatoresConversao[unidadeEntrada][unidadeSaida]).toFixed(2);
        setResultado(`${valor} ${unidadeEntrada} = ${valorConvertido} ${unidadeSaida}`);
    };

    return (
        <div className="container-energia">
            <h2>Conversor de Energia</h2>
            <div className="input-container">
                <input
                    type="number"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    placeholder="Digite o valor"
                    className="meio"
                />
                <select value={unidadeEntrada} onChange={(e) => setUnidadeEntrada(e.target.value)} className="meio">
                    <option value="J">Joule (J)</option>
                    <option value="cal">Caloria (cal)</option>
                    <option value="kWh">Quilowatt-hora (kWh)</option>
                </select>
                <div>
                <span>Para</span>
                </div>
                <select value={unidadeSaida} onChange={(e) => setUnidadeSaida(e.target.value)} className="meio">
                    <option value="J">Joule (J)</option>
                    <option value="cal">Caloria (cal)</option>
                    <option value="kWh">Quilowatt-hora (kWh)</option>
                </select>
            </div>
            <div>
            <button onClick={converterEnergia}>Converter</button>
            </div>
            {resultado && <h3>{resultado}</h3>}
        </div>
    );
}

export default ConversorEnergia;
