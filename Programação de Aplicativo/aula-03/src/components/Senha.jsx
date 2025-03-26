import { useState } from "react";
import './Senha.css'

function GeradorSenha() {
    const [comprimento, setComprimento] = useState(12);
    const [incluirNumeros, setIncluirNumeros] = useState("Sim");
    const [incluirMaiusculas, setIncluirMaiusculas] = useState("Sim");
    const [incluirEspeciais, setIncluirEspeciais] = useState("Sim");
    const [senha, setSenha] = useState("");

    function gerarSenha() {
        let caracteres = "abcdefghijklmnopqrstuvwxyz";
        if (incluirNumeros === "Sim") caracteres += "0123456789";
        if (incluirMaiusculas === "Sim") caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (incluirEspeciais === "Sim") caracteres += "!@#$%^&*()_+{}[]<>?/";

        let novaSenha = "";
        for (let i = 0; i < comprimento; i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            novaSenha += caracteres[randomIndex];
        }

        setSenha(novaSenha);
    }

    function copiarSenha() {
        navigator.clipboard.writeText(senha);
        alert("Senha copiada para a área de transferência!");
    }

    return (
        <div className="container-senha">
            <h2>Gerador de Senhas</h2>

            <label>Comprimento da senha:</label>
            <input
                type="number"
                min="6"
                max="50"
                value={comprimento}
                onChange={(e) => setComprimento(Number(e.target.value))}
            />

            <label>Incluir Números:</label>
            <select value={incluirNumeros} onChange={(e) => setIncluirNumeros(e.target.value)}>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select>

            <label>Incluir Letras Maiúsculas:</label>
            <select value={incluirMaiusculas} onChange={(e) => setIncluirMaiusculas(e.target.value)}>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select>

            <label>Incluir Caracteres Especiais:</label>
            <select value={incluirEspeciais} onChange={(e) => setIncluirEspeciais(e.target.value)}>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select>

            <div className="botaoSenha">
                <button onClick={gerarSenha}>Gerar Senha</button>
            </div>
            
            {senha && (
                <div>
                    <p><strong>Senha Gerada:</strong> {senha}</p>
                    <button onClick={copiarSenha}>Copiar Senha</button>
                </div>
            )}
        </div>
    );
}

export default GeradorSenha;
