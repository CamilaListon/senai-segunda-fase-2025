import React from 'react'
import {useState} from 'react'
import './Desenvolvedor.css'

function Desenvolvedor() {
    const [oracDesenv, setOracDesenv] = useState(false)

    function toggleDesenvolvedor() {
        setOracDesenv(!oracDesenv)
        console.log(oracDesenv);
        
    }

  return (
    <div className="desenvolvedor">
        {/* { oracDesenv && <p>Apareceu</p> } */}
        { oracDesenv && <p>
            Divino Stack Overflow, que estais na nuvem,
            Santificado seja o nosso deploy.
            Venha a nós o CSS alinhado,
            Seja feita a responsividade,
            Assim no Chrome como no Firefox.
            O código nosso de cada dia nos dai hoje,
            Perdoai os nossos console.log,
            Assim como nós perdoamos os commits sem mensagem.
            Não nos deixei cair em callback hell,
            Mas livrai-nos dos bugs de produção.
            Amém, amém, git commit -m "Aleluia".
        </p> }

        <button onClick={toggleDesenvolvedor}>Desenvolvedor</button>
    
        
    </div>
  )
}

export default Desenvolvedor