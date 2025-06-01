import request from 'supertest';
import chai from 'chai';
import app from '../index.js'; 

const expect = chai.expect;

describe('Testes de Hospedagem', () => {
  it('Deve listar hospedagens', async () => {
    const res = await request(app).get('/hospedagens');
    expect(res.status).to.equal(200);
    expect(Array.isArray(res.body)).to.be.true;
  });

  it('Deve criar uma hospedagem', async () => {
    const res = await request(app)
      .post('/admin/hospedagem/create')
      .send({
        nome: 'Hotel Central',
        local: 'Centro da Cidade',
        whatsapp: '987654321',
        instagram: '@hotelcentral'
      });

    expect(res.status).to.equal(201);
  });

  it('Deve atualizar uma hospedagem', async () => {
    const res = await request(app)
      .put('/admin/hospedagem/update/1')
      .send({ nome: 'Hotel Central Atualizado' });

    expect(res.status).to.equal(200);
  });

  it('Deve excluir uma hospedagem', async () => {
    const res = await request(app).delete('/admin/hospedagem/delete/1');
    expect(res.status).to.equal(200);
  });
});
