import { useState } from "react";
import './Temperaturas.css'

function ConversorTemperatura() {
    const [valor, setValor] = useState("");
    const [entrada, setEntrada] = useState("Celsius");
    const [saida, setSaida] = useState("Fahrenheit");
    const [resultado, setResultado] = useState(null);

    function converterTemperatura() {
        let temp = parseFloat(valor);
        if (isNaN(temp)) {
            alert("Por favor, insira um número válido.");
            return;
        }

        let convertido = temp;

        if (entrada === "Celsius" && saida === "Fahrenheit") {
            convertido = temp * 9 / 5 + 32;
        } else if (entrada === "Celsius" && saida === "Kelvin") {
            convertido = temp + 273.15;
        }

        else if (entrada === "Fahrenheit" && saida === "Celsius") {
            convertido = (temp - 32) * 5 / 9;
        } else if (entrada === "Fahrenheit" && saida === "Kelvin") {
            convertido = (temp - 32) * 5 / 9 + 273.15;
        }

        else if (entrada === "Kelvin" && saida === "Celsius") {
            convertido = temp - 273.15;
        } else if (entrada === "Kelvin" && saida === "Fahrenheit") {
            convertido = (temp - 273.15) * 9 / 5 + 32;
        }

        setResultado(convertido.toFixed(2));
    }

    return (
        <div className="container-temperatura">
            <h2>Conversor de Temperatura</h2>
            <div className="informacoes">
                <input
                    type="number"
                    placeholder="Digite a temperatura"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    className="inputTemp"
                />

                <select value={entrada} onChange={(e) => setEntrada(e.target.value)} className="selectTemp">
                    <option value="Celsius">Celsius (°C)</option>
                    <option value="Fahrenheit">Fahrenheit (°F)</option>
                    <option value="Kelvin">Kelvin (K)</option>
                </select>
                <div>
                    <span> para </span>
                </div>
                <select value={saida} onChange={(e) => setSaida(e.target.value)} className="selectTemp">
                    <option value="Celsius">Celsius (°C)</option>
                    <option value="Fahrenheit">Fahrenheit (°F)</option>
                    <option value="Kelvin">Kelvin (K)</option>
                </select>
            </div>

            <div nameClass="botaotemp">
                <button onClick={converterTemperatura}>Converter</button>
            </div>

            {resultado !== null && (
                <p>
                    Resultado: {resultado} {saida === "Celsius" ? "°C" : saida === "Fahrenheit" ? "°F" : "K"}
                </p>
            )}
        </div>
    );
}

export default ConversorTemperatura;
