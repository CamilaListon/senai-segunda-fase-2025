import React from 'react'
import {useState} from 'react'
import './Deploy.css'

function Deploy() {
    const [oracDeploy, setOracDeploy] = useState(false)

    function toggleDeploy() {
        setOracDeploy(!oracDeploy)
        console.log(oracDeploy);
        
    }

  return (
    <div className="Deploy">
        {/* { oracDeploy && <p>Apareceu</p> } */}
        { oracDeploy && <p>
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

        <button onClick={toggleDeploy}>Deploy</button>
    
        
    </div>
  )
}

export default Deploy