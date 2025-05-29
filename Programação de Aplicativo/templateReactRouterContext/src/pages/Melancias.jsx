import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function Melancias() {
    const navigate = useNavigate( )
    function navegar(){
        let nome = prompt("Username")
        if(nome == 'gillBates'){            
            navigate('/final')
        }
        else{
            alert("Incorreto: ultima tentativa")
        }
    }


    return (
        <div>            
            <Navbar/>
            <h1>Melancias</h1>
            <button onClick={navegar}>Navegar para final</button>

        </div>
    )
}

export default Melancias