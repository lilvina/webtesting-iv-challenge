const request = require('supertest')
const server = require('./server.js')

describe('server.js', () => {
  describe('GET /', () => {
    it('responds with 200 OK', () => {
      return request(server)
      .get('/')
      .then(response => {
        expect(response.status).toBe(200)
      })
    })
    it('should work', () => {
      return request(server)
      .get('/')
      .expect(200)
    })
    it('return a JSON', () => {
      return request(server)
      .get('/')
      .then(res => {
        expect(res.type).toBe('application/json')
      })
    })
  })

  describe('POST /', () => {
    it('responds with 201 OK', () => {
      return request(server)
      .post('/')
      .send({name: 'Sailor Moon'})
      .then(response => {
        expect(response.status).toBe(201)
      })
    })
    it('should work', () => {
      return request(server)
      .post('/')
      .send({name: 'Sailor Moon'})
      .expect(201)
    })
    it('return a JSON', () => {
      return request(server)
      .post('/')
      .then(res => {
        expect(res.type).toBe('application/json')
      })
    })
  })

  describe('DELETE /', () => {
    it('responds with 200 OK', () => {
      return request(server)
      .delete('/')
      .then(response => {
        expect(response.status).toBe(200)
      })
    })
    it('should work', () => {
      return request(server)
      .delete('/')
      .expect(200)
    })
    it('return a JSON', () => {
      return request(server)
      .delete('/')
      .then(res => {
        expect(res.type).toBe('application/json')
      })
    })
  })

  it('checks for json', () => {
    return request(server)
    .get('/')
    .expect('Content-Type', /json/)
  })
})
