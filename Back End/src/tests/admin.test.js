import request from 'supertest';
import { expect } from 'chai';
import app from '../index.js';

describe('Testes de Login do Admin', function () {
  this.timeout(5000);

  it('Deve logar com credenciais corretas', async () => {
    const res = await request(app)
      .post('/admin/login')
      .send({ codigo: 'admin123', senha: 'senha123' });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('token');
  });
});

