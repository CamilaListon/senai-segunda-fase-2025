import React from 'react'
import {useState} from 'react'
import './Frontend.css'

function Frontend() {
    const [oracFront, setOracFront] = useState(false)

    function toggleFrontend() {
        setOracFront(!oracFront)
        console.log(oracFront);
        
    }

  return (
    <div className="Frontend">
        {/* { oracFront && <p>Apareceu</p> } */}
        { oracFront && <p>
            Ave CSS, cheia de bugs,
            O framework é convosco,
            Bendita sois vós entre as telas,
            E bendito é o fruto do vosso DOM: o pixel perfeito.
            Santa Documentação, mãe da UI,
            Rogai por nós, devs visuais,
            Agora e na hora do push final.
            Hover.
        </p> }

        <button onClick={toggleFrontend}>Frontend</button>
    
        
    </div>
  )
}

export default Frontend