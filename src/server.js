

import dotenv from "dotenv"

import express from "express"

const app = express()

app.use(express.json)

app.get("/teste", (req, res) => {
    console.log("opa")
    res.send("Backend CRUD")
})


dotenv.config()

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})