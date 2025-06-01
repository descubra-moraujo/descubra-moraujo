import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function criarEvento(req, res) {
  try {
    const { titulo, descricao, dataInicio, dataFim, local, whatsapp, instagram, pontoTuristicoId } = req.body;

    const evento = await prisma.evento.create({
      data: {
        titulo,
        descricao,
        dataInicio: new Date(dataInicio),
        dataFim: new Date(dataFim),
        local,
        whatsapp,
        instagram,
        pontoTuristicoId
      }
    });

    res.status(201).json(evento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar evento' });
  }
}

async function listarEventos(_, res) {
  try {
    const eventos = await prisma.evento.findMany();
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar eventos' });
  }
}

async function atualizarEvento(req, res) {
  const { id } = req.params;
  try {
    const evento = await prisma.evento.update({
      where: { id: parseInt(id) },
      data: req.body
    });

    res.json(evento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar evento' });
  }
}

async function excluirEvento(req, res) {
  const { id } = req.params;
  try {
    await prisma.evento.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Evento excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir evento' });
  }
}

export default {
  criarEvento,
  listarEventos,
  atualizarEvento,
  excluirEvento
};
