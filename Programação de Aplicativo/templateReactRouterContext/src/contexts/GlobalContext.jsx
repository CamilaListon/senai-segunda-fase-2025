import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
// let usuarioLogado = 'Gill Bates'
const [usuarioLogado, setUsuarioLogado] = useState('Gill Bates')
const [usuarios, setUsuarios] = useState([
    {
        id: 0,
        username: 'trampos',
        senha: '1235',
        email: 'trampos@tangerine.com.br'
    }
])
let idadeUsuario = '55'

    return(
        <GlobalContext.Provider value={{
            usuarioLogado,
            setUsuarioLogado,
            idadeUsuario,
            usuarios,
            setUsuarios
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
