import { useState } from 'react'
import './App.css'

function App() {
  const [saldo, setSaldo] = useState(0)
  const [valor, setValor] = useState('')
  const [nomeMovimentacao, setNomeMovimentacao] = useState('')
  const [movimentacoes, setMovimentacoes] = useState([])

  function registrarMovimentacao(tipo) {
    const numero = parseFloat(valor)
    if (!isNaN(numero) && nomeMovimentacao.trim() !== '') {
      const novaMovimentacao = {
        nome: nomeMovimentacao,
        valor: numero,
        tipo: tipo
      }

      setMovimentacoes([...movimentacoes, novaMovimentacao])

      if (tipo === 'Crédito') {
        setSaldo(saldo + numero)
      } else {
        setSaldo(saldo - numero)
      }

      setValor('')
      setNomeMovimentacao('')
    }
  }

  return (
    <div className='container'>
      <div className="indice">
        <img src="./public/graphic-tablet.png" alt="" />
      </div>
      <div className="sup">
      <div className="titulo">
        <label>iMesada</label>
      </div>
      <div className="sub-tit">
        <h3>Controle Financeiro</h3>
      </div>    
      <div className="saldo">
        <label>Saldo: R$ {saldo.toFixed(2)}</label>
      </div>
      </div>
      <div className='infos'>
        <input
          type="text"
          placeholder='Nome da movimentação'
          value={nomeMovimentacao}
          onChange={(e) => setNomeMovimentacao(e.target.value)}
        />
        <input
          type="number"
          placeholder='Valor'
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </div>
      <div className='botoes'>
        <button onClick={() => registrarMovimentacao('Crédito')} id='cred'>Crédito</button>
        <button onClick={() => registrarMovimentacao('Débito')} id='deb'>Débito</button>
      </div>

      <div className="relatorio">
        <label id='relat'>Relatório de Movimentações</label>
        <ul>
          {movimentacoes.map((mov, index) => (
            <li key={index}>
              <strong>{mov.nome}</strong> - R$ {mov.valor.toFixed(2)} ({mov.tipo})
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
