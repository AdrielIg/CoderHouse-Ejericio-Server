const request = require('supertest')('http://localhost:8080')
const expect = require('chai').expect

describe('Obtener productos', () => {
  describe('GET', () => {
    it('debe retornar los productos', async () => {
      let response = await request.get('/api/productos/listar')
      expect(response.body).to.be.an('array')
    })
  })
  describe('POST', () => {
    it('Debe incorporar un nuevo producto', async () => {
      const producto = {
        title: 'Test',
        thumbnail: 'Test-img',
        price: 700
      }
      let response = await request.post('/api/productos/guardar').send(producto)
      /*302 = redireccion */
      expect(response.status).to.eql(302)
    })
  })

  describe('DELETE', () => {
    it('Debe borrar un producto', async () => {
      const id = '61479b20843f0f39fc4e3bba'
      let response = await request.delete(`/api/productos/borrar/${id}`)
      expect(response.status).to.eql(200)

    })
  })
  describe('PUT', () => {
    it('Debe actualizar un producto', async () => {
      const id = '61479b20843f0f39fc4e3bba';
      const product = {
        title: 'TEST3',
        price: 100
      }
      let response = await request.put(`/api/productos/actualizar/${id}`).send(product)
      expect(response.status).to.eql(200)
    })
  })

})