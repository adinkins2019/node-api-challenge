const PORT = 5000
const express = require('express')
const actionsRouter = require('./actions/actionsRouter')
const projectsRouter = require('./projects/projectsRouter')

const server = express()

server.use(express.json())
server.use(actionsRouter)
server.use(projectsRouter)


server.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})