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

module.exports = server;
