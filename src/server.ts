import express, { request } from 'express'
import './database'

const app = express()

/**
 * GET = Buscar
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica
 */

app.get("/", (request, response) => {
    return response.json({ 
        message: "Olá NLW05"
    })
})

app.post("/users", (request, response) => {
    return response.json({ message: "Usuário salvo com sucesso"})
})

app.listen(3333, () => console.log("Server is running on port 3333"))