import app from './app.js'
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 3001

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})