import { useState } from "react";
import './Contador.css'

function ContadorTexto() {
    const [texto, setTexto] = useState("");

    const contarPalavras = (texto) => {
        const palavras = texto.trim().split(/\s+/);
        return texto.trim() === "" ? 0 : palavras.length;
    };

    const contarCaracteres = (texto) => {
        return texto.length;
    };

    return (
        <div className="container-contador">
            <h2>Contador de Palavras e Caracteres</h2>

            <textarea
                placeholder="Digite seu texto aqui..."
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                className="texto"
            ></textarea>

            <p><strong>Palavras:</strong> {contarPalavras(texto)}</p>
            <p><strong>Caracteres:</strong> {contarCaracteres(texto)}</p>
        </div>
    );
}

export default ContadorTexto;
