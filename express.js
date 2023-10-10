const express = require('express')
const charizard = require('./pokemon/charizard.js')

const PORT = process.env.PORT ?? 3000

const app = express()
app.disable('x-powered-by')

// Middleware
app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  let body = ''

  req.on('data', chunk => {
    body += chunk.toString()
  })
  req.on('end', () => {
    const data = JSON.parse(body)
    req.body = data
    next()
  })
})
// O bien
// app.use(express.json())

app.get('/pokemon/charizard', (req, res) => {
  return res.json(charizard)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`server escuchando el puerto http:localhost:${PORT}`)
})
