
import './App.css'
import Aprendiz from './components/Aprendiz'
import Resiliente from './components/Resiliente'
import Backend from './components/Backend'
import Deploy from './components/Deploy'
import Desenvolvedor from './components/Desenvolvedor'
import Estudante from './components/Estudante'
import Frontend from './components/Frontend'
import Fullstack from './components/Fullstack'
import Programador from './components/Programador'
import DevCansado from './components/DevCansado'
function App() {



  return (
    <div className='container-geral'>
    <DevCansado/>
    <Aprendiz/>
    <Resiliente/>
    <Estudante/>
    <Programador/>
    <Deploy/>
    <Fullstack/>
    <Backend/>
    <Frontend/>
    <Desenvolvedor/>

    </div>
  )
}

export default App
