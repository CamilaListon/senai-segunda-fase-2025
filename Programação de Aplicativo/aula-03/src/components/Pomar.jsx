import React, { useState } from "react";
import './Pomar.css';

const precoFrutas = {
    maçã: 1.50,
    laranja: 2.00,
    bergamota: 1.00,
    banana: 1.20,
    pera: 0.50
};

const CaixaDePagamento = () => {
    const [quantidades, setQuantidades] = useState({
        maçã: 0,
        laranja: 0,
        bergamota: 0,
        banana: 0,
        pera: 0
    });

    const [total, setTotal] = useState(0);

    const handleChange = (fruta, valor) => {
        setQuantidades({
            ...quantidades,
            [fruta]: valor
        });
    };

    const calcularTotal = () => {
        let totalCalculado = 0;

        for (let fruta in quantidades) {
            totalCalculado += quantidades[fruta] * precoFrutas[fruta];
        }

        setTotal(totalCalculado);
    };

    const reiniciarSoma = () => {
        setQuantidades({
            maçã: 0,
            laranja: 0,
            bergamota: 0,
            banana: 0,
            pera: 0
        });
        setTotal(0);
    };

    return (
        <div className="container-pomar">
            <h2 className="header">Caixa de Atendimento - Trajeto Pomar</h2>
            <div>
                <h4>Informe as quantidades de cada fruta colhida:</h4>
                {Object.keys(precoFrutas).map((fruta) => (
                    <div key={fruta} className="input-group">
                        <label className="label">
                            {fruta.charAt(0).toUpperCase() + fruta.slice(1)} (un):
                        </label>
                        <input
                            type="number"
                            value={quantidades[fruta]}
                            onChange={(e) => handleChange(fruta, parseInt(e.target.value) || 0)}
                            className="input-field"
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={calcularTotal}
                className="calcular-btn"
            >
                Calcular Total
            </button>

            <button
                onClick={reiniciarSoma}
                className="reiniciar-btn"
            >
                Reiniciar
            </button>

            {total > 0 && (
                <div className="recibo">
                    <h3>Recibo:</h3>
                    <ul className="recibo-list">
                        {Object.keys(quantidades).map((fruta) => (
                            quantidades[fruta] > 0 && (
                                <li key={fruta} className="recibo-item">
                                    {fruta.charAt(0).toUpperCase() + fruta.slice(1)}: {quantidades[fruta]} un x R${precoFrutas[fruta].toFixed(2)} = R${(quantidades[fruta] * precoFrutas[fruta]).toFixed(2)}
                                </li>
                            )
                        ))}
                    </ul>
                    <p><strong>Total a pagar: R${total.toFixed(2)}</strong></p>
                </div>
            )}
        </div>
    );
};

export default CaixaDePagamento;
