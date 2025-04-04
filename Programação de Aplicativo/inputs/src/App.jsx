import { useState } from 'react'
import './App.css'

function App() {
  const[inputUsername, setInputUsername] = useState('')
  const[inputSenha, setInputSenha] = useState('')
  const[erro, setErro] = useState(false)

  function efetuarLogin(){
    //GillBates
    //1235  
    if(inputUsername =='GillBates' && inputSenha == '1235'){
      alert("Pode entrar")
      setErro(false)
    }else{
      // alert("Erro #403")
      setErro(true)
    }

  }

  return (
    <div className='container-app'>
      <h2>Inputs Controlados</h2>
      <label htmlFor="">Username</label>
      <input type="text" 
        value={inputUsername}
        onChange={(event) => setInputUsername(event.target.value)}
      />

      <label htmlFor="">Senha</label>
      <input type="text" 
      value={inputSenha}
      onChange={(event) => setInputSenha (event.target.value)}
      />

      {erro && 
      <span className='msg-erro'>Credenciais inválidas.</span>
      }

      <button onClick={efetuarLogin}>Login</button>

    </div>
  )
}

export default App

// https://neumorphism.io/#e0e0e0