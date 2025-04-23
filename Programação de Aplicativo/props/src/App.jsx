import { useEffect, useState } from 'react'
import './App.css'
import Produto from './components/Produto'

function App() {
  const [inputModelo, setInputModelo] = useState('')
  const [inputPreco, setInputPreco] = useState('')
  const[produtos, setProdutos] = useState([
    {id: Date.now(), modelo: "Melancia", preco: 22},
    {id: Date.now()+1, modelo: "Pneu", preco: 220},
    {id: Date.now()+2, modelo: "Garrafa", preco: 2},
    {id: Date.now()+3, modelo: "Notebook", preco: 6000},    
    {id: Date.now()+4, modelo: "Desktop", preco: 12000},
  ])


  useEffect(() =>
    console.log(produtos)    
    ,[produtos])

  useEffect(() =>
      console.log ("Carregando dados..."))
      

  function testar(){
    let produto = {
      id: Date.now(), 
      modelo: "Produto X",
      preco: 10
    }
    
    // console.log(produtos);
  }
  
  function cadastrar() {
    let produto = {
      id: Date.now(), 
      modelo: inputModelo,
      preco: Number(inputPreco)
    }
    setInputModelo('')
    setInputPreco('')
    setProdutos([produto, ... produtos])

  }

  return (
    <div className='container-app'>
      <div className="cima">
      </div>

      <div className='form-produto'> 
        <label htmlFor="">Modelo</label>
        <input type="text" 
        value={inputModelo}
        onChange={(event) => setInputModelo(event.target.value)}
        placeholder='Insira o modelo' />
        
        <label htmlFor="">Preço</label>
        <input type="number" 
        value={inputPreco}
        onChange={(event) => setInputPreco(event.target.value)}
        placeholder='Insira o valor'/>
        
        <button onClick={cadastrar} id='cadastro'>Cadastrar</button>
      </div>
      

      <button onClick={testar}>TESTAR</button>

      <div className="cards">
        {produtos.map((p) =>(
        <Produto key={p.id} modelo={p.modelo} preco={p.preco} id={p.id}/>
      ))}
      </div>


      </div>
  )
}

export default App
