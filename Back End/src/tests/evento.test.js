import request from 'supertest';
import chai from 'chai';
import app from '../index.js'; 

const expect = chai.expect;

describe('Testes de Eventos', () => {
  it('Deve listar eventos', async () => {
    const res = await request(app).get('/eventos');
    expect(res.status).to.equal(200);
    expect(Array.isArray(res.body)).to.be.true;
  });

  it('Deve criar um evento', async () => {
    const res = await request(app)
      .post('/admin/evento/create')
      .send({
        titulo: 'Festival de Música',
        descricao: 'Evento cultural',
        dataInicio: '2025-06-10',
        dataFim: '2025-06-12',
        local: 'Praça Central',
        whatsapp: '123456789',
        instagram: '@festival'
      });

    expect(res.status).to.equal(201);
  });

  it('Deve atualizar um evento', async () => {
    const res = await request(app)
      .put('/admin/evento/update/1')
      .send({ titulo: 'Festival Atualizado' });

    expect(res.status).to.equal(200);
  });

  it('Deve excluir um evento', async () => {
    const res = await request(app).delete('/admin/evento/delete/1');
    expect(res.status).to.equal(200);
  });
});

