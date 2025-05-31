// src/routes/eventosRoutes.js
import express from 'express';
import prisma from '../prisma.js';

const router = express.Router();

// [ADMIN] Criar evento
router.post('/admin/evento/create', async (req, res) => {
  try {
    const evento = await prisma.evento.create({ data: req.body });
    res.json(evento);
  } catch (e) {
    res.status(500).json({ error: 'Erro ao criar evento.' });
  }
});

// [USUÁRIO] Listar eventos
router.get('/eventos', async (req, res) => {
  const eventos = await prisma.evento.findMany();
  res.json(eventos);
});

// [ADMIN] Atualizar evento
router.put('/admin/evento/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const atualizado = await prisma.evento.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(500).json({ error: 'Erro ao atualizar evento.' });
  }
});

// [ADMIN] Deletar evento
router.delete('/admin/evento/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.evento.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Evento removido.' });
  } catch (e) {
    res.status(500).json({ error: 'Erro ao remover evento.' });
  }
});

// [ADMIN] Criar restaurante
router.post('/admin/restaurante/create', async (req, res) => {
  try {
    const restaurante = await prisma.restaurante.create({ data: req.body });
    res.json(restaurante);
  } catch (e) {
    res.status(500).json({ error: 'Erro ao criar restaurante.' });
  }
});

// [USUÁRIO] Listar restaurantes
router.get('/restaurantes', async (req, res) => {
  const restaurantes = await prisma.restaurante.findMany();
  res.json(restaurantes);
});

// [ADMIN] Atualizar restaurante
router.put('/admin/restaurante/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const atualizado = await prisma.restaurante.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(500).json({ error: 'Erro ao atualizar restaurante.' });
  }
});

// [ADMIN] Deletar restaurante
router.delete('/admin/restaurante/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.restaurante.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Restaurante removido.' });
  } catch (e) {
    res.status(500).json({ error: 'Erro ao remover restaurante.' });
  }
});

// [ADMIN] Criar hospedagem
router.post('/admin/hospedagem/create', async (req, res) => {
  try {
    const hospedagem = await prisma.hospedagem.create({ data: req.body });
    res.json(hospedagem);
  } catch (e) {
    res.status(500).json({ error: 'Erro ao criar hospedagem.' });
  }
});

// [USUÁRIO] Listar hospedagens
router.get('/hospedagens', async (req, res) => {
  const hospedagens = await prisma.hospedagem.findMany();
  res.json(hospedagens);
});

// [ADMIN] Atualizar hospedagem
router.put('/admin/hospedagem/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const atualizado = await prisma.hospedagem.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(500).json({ error: 'Erro ao atualizar hospedagem.' });
  }
});

// [ADMIN] Deletar hospedagem
router.delete('/admin/hospedagem/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.hospedagem.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Hospedagem removida.' });
  } catch (e) {
    res.status(500).json({ error: 'Erro ao remover hospedagem.' });
  }
});

// [ADMIN] Criar ponto turístico
router.post('/admin/pontoturistico/create', async (req, res) => {
  try {
    const ponto = await prisma.pontoTuristico.create({ data: req.body });
    res.json(ponto);
  } catch (e) {
    res.status(500).json({ error: 'Erro ao criar ponto turístico.' });
  }
});

// [USUÁRIO] Listar pontos turísticos
router.get('/pontos-turisticos', async (req, res) => {
  const pontos = await prisma.pontoTuristico.findMany();
  res.json(pontos);
});

// [ADMIN] Atualizar ponto turístico
router.put('/admin/pontoturistico/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const atualizado = await prisma.pontoTuristico.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(500).json({ error: 'Erro ao atualizar ponto turístico.' });
  }
});

// [ADMIN] Deletar ponto turístico
router.delete('/admin/pontoturistico/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.pontoTuristico.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Ponto turístico removido.' });
  } catch (e) {
    res.status(500).json({ error: 'Erro ao remover ponto turístico.' });
  }
});

export default router;
