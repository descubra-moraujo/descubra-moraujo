import prisma from "../config/prisma.js";

// Função para criar hospedagem
async function criarHospedagem(req, res) {
  try {
    const { nome, local, whatsapp, instagram, pontoTuristicoId } = req.body;

    const hospedagem = await prisma.hospedagem.create({
      data: { nome, local, whatsapp, instagram, pontoTuristicoId }
    });

    res.status(201).json(hospedagem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar hospedagem' });
  }
}

// Função para listar todas as hospedagens
async function listarHospedagens(_, res) {
  try {
    const hospedagens = await prisma.hospedagem.findMany();
    res.json(hospedagens);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar hospedagens' });
  }
}

// Função para atualizar hospedagem
async function atualizarHospedagem(req, res) {
  const { id } = req.params;
  try {
    const hospedagem = await prisma.hospedagem.update({
      where: { id: parseInt(id) },
      data: req.body
    });

    res.json(hospedagem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar hospedagem' });
  }
}

// Função para excluir hospedagem
async function excluirHospedagem(req, res) {
  const { id } = req.params;
  try {
    await prisma.hospedagem.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Hospedagem excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir hospedagem' });
  }
}

// Exportar todas as funções dentro de um objeto
export default {
  criarHospedagem,
  listarHospedagens,
  atualizarHospedagem,
  excluirHospedagem
};