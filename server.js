// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write("oi")
    
//     return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'

const server = fastify()



server.post('/videos', () => {
    return 'Hello World'
})

server.get('/videos', () => {
    return 'Hello helloWorld'
})

server.put('/videos/:id', () => {
    return 'Hello helloWorld'
})

server.delete('/videos/:id', () => {
    return 'Hello helloWorld'
})

server.listen({
    port: 3333,
})