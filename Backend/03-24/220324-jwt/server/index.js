import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'

import { entryRouter } from './entries/entry.controller.js'
import { userRouter } from './users/user.controller.js'

const PORT = 3000
const app = express()

app.use(cors())
app.use(express.json());

app.use("/entries", entryRouter)
app.use("/users", userRouter)

await mongoose.connect(process.env.MONGODB_URI)


app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`)
})