import http from 'node:http'
import { charizard } from './pokemon/charizard.mjs'

const server = http.createServer((req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon':
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>PokemonApi by FLM</h1>')
        case '/pokemon/charizard':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(charizard))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('404 Not Found')
      }

    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''

          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            console.log(body)
            const data = JSON.parse(body)
            console.log(data)
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            res.end(JSON.stringify(data))
          })

          break
        }

        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('404 Not Found')
      }
  }
})

server.listen(3000, () => {
  console.log('server listening on port 3000')
})
