'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({ port: 5000 })

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello !')
  }
})

server.start((err) => {
  if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`)
})
