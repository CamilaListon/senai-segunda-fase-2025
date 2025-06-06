import React from 'react'
import {useState} from 'react'
import './DevCansado.css'

function DevCansado() {
    const [OracDevCansado, setOracDevCansado] = useState(false)

    function toggleDevCansado() {
        setOracDevCansado(!OracDevCansado)        
    }

  return (
    <div className="DevCansado">
        {/* { OracDevCansado && <p>Apareceu</p> } */}
        { OracDevCansado && <p>
            Senhor dos Logs,
            Que tudo vê, até os erros que escondo com `try/catch`,
            Dai-me forças, pois a minha está em `null`.
            Não peço mais produtividade,
            Só paz no coração e um código que pare de quebrar.
            Já não distingo mais tab de espaço,
            E até o botão de salvar me julga em silêncio.
            Livrai-me das daily às 8h,
            dos clientes que “só queriam um botãozinho a mais”,
            e dos bugs que somem quando eu compartilho a tela.
            Fazei meu código rodar, mesmo que por pena.
            E se não rodar, que pelo menos pare de rodar minha cabeça.
            Se eu dormir sobre o teclado,
            que os sonhos me levem para um lugar sem deadlines,
            sem hotfix,
            sem SLA.
            **Amém, e se puder, só mais 5 minutinhos.**
        </p> }

        <button onClick={toggleDevCansado}>DevCansado</button>
    
        
    </div>
  )
}

export default DevCansado