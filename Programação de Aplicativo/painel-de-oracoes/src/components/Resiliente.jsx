import React from 'react'
import {useState} from 'react'
import './Resiliente.css'

function Resiliente() {
    const [oracResi, setOracResi] = useState(false)

    function toggleResiliente() {
        setOracResi(!oracResi)
        console.log(oracResi);
        
    }

  return (
    <div className="Resiliente">
        {/* { oracResi && <p>Apareceu</p> } */}
        { oracResi && <p>
            Concedei-me, Senhor,
            a força para lidar com o código que não entendo,
            a paciência para revisar o que já revi mil vezes,
            e a coragem para recomeçar quando tudo dá errado.
            Que eu aceite os bugs que não posso evitar,
            corrija os que posso,
            e tenha sabedoria para não quebrar o que já está funcionando.
            Pois na vida e na programação,
            quem cai sete vezes, levanta com `git stash`.
            **Stack Overflow seja louvado.**
        </p> }

        <button onClick={toggleResiliente}>Resiliente</button>
    
        
    </div>
  )
}

export default Resiliente