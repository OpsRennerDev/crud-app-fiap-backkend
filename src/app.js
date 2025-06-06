import express from "express"
import authRoutes from "./routes/auth.js"

const app = express()

app.use(express.json())
app.use("/auth", authRoutes)

app.get("/", (req, res) => {
    res.send("Backend CRUD")
})

export default app