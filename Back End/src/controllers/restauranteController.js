import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function criarRestaurante(req, res) {
  try {
    const { nome, local, whatsapp, instagram, pontoTuristicoId } = req.body;

    const restaurante = await prisma.restaurante.create({
      data: {
        nome,
        local,
        whatsapp,
        instagram,
        pontoTuristicoId
      }
    });

    res.status(201).json(restaurante);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar restaurante' });
  }
}

async function listarRestaurantes(_, res) {
  try {
    const restaurantes = await prisma.restaurante.findMany();
    res.json(restaurantes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar restaurantes' });
  }
}

async function atualizarRestaurante(req, res) {
  const { id } = req.params;
  try {
    const restaurante = await prisma.restaurante.update({
      where: { id: parseInt(id) },
      data: req.body
    });

    res.json(restaurante);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar restaurante' });
  }
}

async function excluirRestaurante(req, res) {
  const { id } = req.params;
  try {
    await prisma.restaurante.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Restaurante excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir restaurante' });
  }
}

export default {
  criarRestaurante,
  listarRestaurantes,
  atualizarRestaurante,
  excluirRestaurante
};
