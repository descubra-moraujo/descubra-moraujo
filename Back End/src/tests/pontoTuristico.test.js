import request from 'supertest';
import chai from 'chai';
import app from '../index.js';

const expect = chai.expect;

describe('Testes de Restaurantes', () => {
  it('Deve listar restaurantes', async () => {
    const res = await request(app).get('/restaurantes');
    expect(res.status).to.equal(200);
    expect(Array.isArray(res.body)).to.be.true;
  });

  it('Deve criar um restaurante', async () => {
    const res = await request(app)
      .post('/admin/restaurante/create')
      .send({
        nome: 'Restaurante da Praça',
        endereco: 'Rua Principal, 123',
        whatsapp: '345678901',
        instagram: '@restaurantepraça'
      });

    expect(res.status).to.equal(201);
  });

  it('Deve atualizar um restaurante', async () => {
    const res = await request(app)
      .put('/admin/restaurante/update/1')
      .send({ nome: 'Restaurante Atualizado' });

    expect(res.status).to.equal(200);
  });

  it('Deve excluir um restaurante', async () => {
    const res = await request(app).delete('/admin/restaurante/delete/1');
    expect(res.status).to.equal(200);
  });
});
