import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

async function loginAdmin(req, res) {
  try {
    const { codigo, senha } = req.body;

    const admin = await prisma.admin.findUnique({
      where: { codigo }
    });

    if (!admin || admin.senha !== senha) {
      return res.status(401).json({ error: 'Código ou senha incorretos' });
    }

    const token = jwt.sign({ id: admin.id, codigo: admin.codigo }, process.env.JWT_SECRET, { expiresIn: '2h' });

    res.json({ message: 'Login realizado com sucesso', token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao realizar login' });
  }
}

export default {
  loginAdmin
};
