import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

async function loginAdmin(req, res) {
  try {
    const { codigo, senha } = req.body;

    const admin = await prisma.admin.findUnique({ where: { codigo } });

    if (!admin || !(await bcrypt.compare(senha, admin.senha))) {
      return res.status(401).json({ error: 'Código ou senha incorretos' });
    }

    const token = jwt.sign(
      { id: admin.id, codigo: admin.codigo },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ message: 'Login realizado com sucesso', token });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro ao realizar login' });
  }
}

async function criarAdmin(req, res) {
  try {
    const { codigo, senha } = req.body;

    const senhaHash = await bcrypt.hash(senha, SALT_ROUNDS);

    const novoAdmin = await prisma.admin.create({
      data: {
        codigo,
        senha: senhaHash
      }
    });

    res.status(201).json({ message: 'Admin criado com sucesso!', admin: novoAdmin });
  } catch (error) {
    console.error('Erro ao criar admin:', error);
    res.status(500).json({ error: 'Erro ao criar administrador' });
  }
}

export default {
  loginAdmin,
  criarAdmin
};
