import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function criarPontoTuristico(req, res) {
  try {
    const { nome, descricao, local, whatsapp, instagram } = req.body;

    const pontoTuristico = await prisma.pontoTuristico.create({
      data: {
        nome,
        descricao,
        local,
        whatsapp,
        instagram
      }
    });

    res.status(201).json(pontoTuristico);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar ponto turístico' });
  }
}

async function listarPontosTuristicos(_, res) {
  try {
    const pontosTuristicos = await prisma.pontoTuristico.findMany();
    res.json(pontosTuristicos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pontos turísticos' });
  }
}

async function atualizarPontoTuristico(req, res) {
  const { id } = req.params;
  try {
    const pontoTuristico = await prisma.pontoTuristico.update({
      where: { id: parseInt(id) },
      data: req.body
    });

    res.json(pontoTuristico);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar ponto turístico' });
  }
}

async function excluirPontoTuristico(req, res) {
  const { id } = req.params;
  try {
    await prisma.pontoTuristico.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Ponto turístico excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir ponto turístico' });
  }
}

export default {
  criarPontoTuristico,
  listarPontosTuristicos,
  atualizarPontoTuristico,
  excluirPontoTuristico
};
