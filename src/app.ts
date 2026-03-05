import express from "express"
import cors from "cors"
import routes from "./routes"
import { notFoundHandler, errorMiddleware } from "./middlewares/errorMiddleware"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: process.env.APP_URL,
    credentials: true
}))
app.use(routes)
app.use(notFoundHandler)
app.use(errorMiddleware)

export default app