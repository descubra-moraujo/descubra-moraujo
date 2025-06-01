import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 🔹 Criar Ponto Turístico
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

// 🔹 Listar Todos os Pontos Turísticos
async function listarPontosTuristicos(_, res) {
  try {
    const pontosTuristicos = await prisma.pontoTuristico.findMany();
    res.json(pontosTuristicos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pontos turísticos' });
  }
}

// 🔹 Atualizar Ponto Turístico
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

// 🔹 Excluir Ponto Turístico
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

// 🔹 Exportar funções em um objeto
export default {
  criarPontoTuristico,
  listarPontosTuristicos,
  atualizarPontoTuristico,
  excluirPontoTuristico
};
