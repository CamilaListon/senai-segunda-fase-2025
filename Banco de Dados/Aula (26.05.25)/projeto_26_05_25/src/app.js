import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

app.use(express.json())

//criar rota

app.get('/estudantesY', (req, res) =>{
    const sql = 'SELECT * FROM dados_estudantes'
    conexao.query(sql,(erro, resultado) =>{
        if(erro){
            console.log(erro)
        } else {
            res.json(resultado)
        }
    })
})


app.get('/estudantesY/:id', (req, res) =>{
    const id = req.params.id
    const sql = 'SELECT * FROM dados_estudantes WHERE id_estudante=?'
    conexao.query(sql, id, (erro, resultado) =>{
        if(erro){
            console.log(erro)
        } else {
            res.json(resultado)
        }
    })
})


export default app