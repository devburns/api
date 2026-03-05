import express from "express"
import cors from "cors"
import routes from "./routes"
import { notFoundHandler, errorMiddleware } from "./middlewares/errorMiddleware"

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: process.env.APP_URL,
    credentials: true
}))
app.use(routes)
app.use(notFoundHandler)
app.use(errorMiddleware)

const server = app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`)
})

server.on("error", (err: Error) => {
    console.error("❌ Error starting server:", err.message)
    process.exit(1)
})
