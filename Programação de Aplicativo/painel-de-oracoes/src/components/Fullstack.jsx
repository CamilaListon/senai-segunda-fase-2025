import React from 'react'
import {useState} from 'react'
import './Fullstack.css'

function Fullstack() {
    const [oracFull, setOracFull] = useState(false)

    function toggleFullstack() {
        setOracFull(!oracFull)
        console.log(oracFull);
        
    }

  return (
    <div className="Fullstack">
        {/* { oracFull && <p>Apareceu</p> } */}
        { oracFull && <p>
            Senhor Git, dai-me forças para subir a branch certa,
            Coragem para lidar com o merge,
            E sabedoria para entender o código que eu mesmo escrevi ontem.
            Concedei-me domínio sobre o front, o back, e o café.
            Protegei minha stack das atualizações quebradoras,
            E dai-me fé nos testes automatizados.
            Pois teu é o commit,
            O build e a glória do log,
            Agora e para sempre,
            `npm run dev`.
        </p> }

        <button onClick={toggleFullstack}>Fullstack</button>
    
        
    </div>
  )
}

export default Fullstack