import express from "express"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const router = express.Router()
const prisma = new PrismaClient

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    const hash = await bcrypt.hash(password, 10)  
    const user = await prisma.user.create({ data: { name, email, password: hash } })
    res.json({user})
})

router.login("/login", async (req, res) => {
    const {email, password} = req.body
    const user = await prisma.user.findUnique({ where: {email} })
    if (!user) return res.status(400).send("Usuário não encontrado")
    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(400).send("Senha inválida")
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
    res.json({token})
})

export default router