import React from 'react'
import {useState} from 'react'
import './Estudante.css'

function Estudante() {
    const [oracEstudante, setOracEstudante] = useState(false)

    function toggleEstudante() {
        setOracEstudante(!oracEstudante)
        console.log(oracEstudante);
        
    }

  return (
    <div className="Estudante">
        {/* { oracEstudante && <p>Apareceu</p> } */}
        { oracEstudante && <p>
            Senhor dos Códigos,
            Concede-me memória RAM e memória humana.
            Faze com que os bugs da aula não se repliquem na minha cabeça,
            e que o VS Code não trave quando eu mais precisar.
            Livrai-me das provas de múltipla escolha com alternativas parecidas,
            dos professores que trocam tudo na véspera,
            e dos colegas que sabem colar melhor do que estudar.
            Dai-me coragem para levantar a mão,
            e sabedoria para não deletar a pasta errada.
            **Amém, compila.**
        </p> }

        <button onClick={toggleEstudante}>Estudante</button>
    
        
    </div>
  )
}

export default Estudante