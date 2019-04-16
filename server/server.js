const express = require('express')
const server = express()
const db = require('../data/dbConfig.js')
server.use(express.json())

server.get('/', (req, res) => {
  db('anime').then(response => {
    res.status(200).json(response)
  }).catch(err => {
    res.status(500).json(err)
  })
})

server.post('/', (req, res) => {
  db('anime').insert(req.body)
  .then(response => {
    res.status(201).json(response)
  }).catch(err => {
    res.status(500).json(err)
  })
})

server.delete('/', (req, res) => {

  db('anime').where(req.body)
  .delete()
  .then(response => {
    res.status(200).json(response)
  }).catch(err => {
    res.status(500).json(err)
  })
})

module.exports = server;
