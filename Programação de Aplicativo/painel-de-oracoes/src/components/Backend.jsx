import React from 'react'
import {useState} from 'react'
import './Backend.css'

function Backend() {
    const [oracBack, setOracBack] = useState(false)

    function toggleBackend() {
        setOracBack(!oracBack)
        console.log(oracBack);
        
    }

  return (
    <div className="Backend">
        {/* { oracBack && <p>Apareceu</p> } */}
        { oracBack && <p>
            Nosso código que está no servidor,
            Santificado seja o teu endpoint,
            Venha a nós o teu JSON,
            Seja feita tua lógica,
            Assim na API como no banco.
            O token nosso de cada dia nos dai hoje,
            Perdoai nossas queries mal otimizadas,
            Assim como nós perdoamos quem nos envia POST sem body.
            E não nos deixes cair em loops infinitos,
            Mas livrai-nos do downtime.
            Amém, amém, status 200.
        </p> }

        <button onClick={toggleBackend}>Backend</button>
    
        
    </div>
  )
}

export default Backend