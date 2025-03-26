import { useState } from 'react'
import './AnoBissexto.css'

function AnoBissexto() {
  const [ano, setAno] = useState(''); 
  const [resultado, setResultado] = useState('Resultado não calculado');

  function verificarAnoBissexto() {
    const anoNumerico = Number(ano); 

    if ((anoNumerico % 4 === 0 && anoNumerico % 100 !== 0) || anoNumerico % 400 === 0) {
      setResultado(`O ano ${anoNumerico} é bissexto.`);
    } else {
      setResultado(`O ano ${anoNumerico} não é bissexto.`);
    }
  }

  return (
    <div className='container-anoBissexto'>
      <h2>Ano Bissexto</h2>

      <input
        type="number"
        value={ano}
        onChange={(e) => setAno(e.target.value)} 
        placeholder="Digite o ano"
      />

      <button onClick={verificarAnoBissexto} className="btnAno">Verificar Ano</button>
      
      <p>
        {resultado}
      </p>
    </div>
  )
}

export default AnoBissexto
