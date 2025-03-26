import { useState } from 'react';
import "./Estados.css";


function Estados() {
  const [usuario, setUsuario] = useState("Helena");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [nome, setNome] = useState("Camila");

  function validarSenha() {
    if (senha !== confirmarSenha) {
      alert("As senhas são diferentes");
    } else {
      alert("Senha alterada com sucesso!");
    }
  }

  return (
    <div className="container-estados">
      <h2>Estados</h2>
      <div clasName="usuario">
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />

        <label>Usuário:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Digite seu usuário"
        />
      </div>
      <div className="senha">
        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
        />

        <label>Confirme a Senha:</label>
        <input
          type="password"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          placeholder="Confirme sua senha"
        />
        <div className="botao">
          <button onClick={validarSenha}>Salvar</button>
        </div>
      </div>
      <div>
        <p><strong>Nome:</strong> {nome}</p>
        <p><strong>Usuário:</strong> {usuario}</p>
      </div>
    </div>
  );
}
export default Estados;
