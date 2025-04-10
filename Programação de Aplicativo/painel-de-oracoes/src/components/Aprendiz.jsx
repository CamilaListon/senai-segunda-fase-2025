import React from 'react'
import {useState} from 'react'
import './Aprendiz.css'

function Aprendiz() {
    const [oracApren, setOracApren] = useState(false)

    function toggleAprendiz() {
        setOracApren(!oracApren)
        console.log(oracApren);
        
    }

  return (
    <div className="Aprendiz">
        {/* { oracApren && <p>Apareceu</p> } */}
        { oracApren && <p>
            Oh Grande Sintaxe,
            que tudo vê e tudo espera,
            ensinai-me a diferença entre `==` e `===`,
            entre `let`, `var`, e `const`,
            entre o que parece funcionar
            e o que realmente funciona.
            Dai-me humildade para perguntar,
            curiosidade para explorar,
            e persistência para continuar
            quando tudo der `undefined`.
            Pois estou apenas começando,
            mas já sou parte do repositório da evolução.
            **Commit inicial. Amém.**
        </p> }

        <button onClick={toggleAprendiz}>Aprendiz</button>
    
        
    </div>
  )
}

export default Aprendiz