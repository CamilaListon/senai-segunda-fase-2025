import { useState } from "react";
import './Distancia.css'

function Distancia() {
    const [metros, setMetros] = useState(""); 
    const [saida, setSaida] = useState("Quilômetros"); 
    const [resultado, setResultado] = useState(null); 

    function converterDistancia() {
        let valor = parseFloat(metros);
        if (isNaN(valor) || valor < 0) {
            alert("Por favor, insira um número válido.");
            return;
        }

        let convertido = valor;

        if (saida === "Quilômetros") {
            convertido = valor / 1000; 
        } else if (saida === "Milhas") {
            convertido = valor / 1609.34; 
        } else if (saida === "Pés") {
            convertido = valor * 3.28084; 
        }

        setResultado(convertido.toFixed(4)); 
    }

    return (
        <div className="container-distancia">
            <h2>Conversor de Distância</h2>


            <input
                type="number"
                placeholder="Digite a distância em metros"
                value={metros}
                onChange={(e) => setMetros(e.target.value)}
            />


            <span> para </span>
            <select value={saida} onChange={(e) => setSaida(e.target.value)}>
                <option value="Quilômetros">Quilômetros (km)</option>
                <option value="Milhas">Milhas (mi)</option>
                <option value="Pés">Pés (ft)</option>
            </select>

            <div className="botaodist">
                <button onClick={converterDistancia}>Converter</button>
            </div>

            {resultado !== null && (
                <p>
                    Resultado: {resultado} {saida}
                </p>
            )}
        </div>
    );
}

export default Distancia;
