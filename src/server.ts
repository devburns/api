import app from "./app"

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`)
})

server.on("error", (err: Error) => {
    console.error("❌ Error starting server:", err.message)
    process.exit(1)
})