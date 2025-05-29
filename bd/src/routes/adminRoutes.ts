import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/login', async (req: Request, res: Response): Promise<Response> => {
  const { codigo, senha } = req.body;

  if (!codigo || !senha) {
    return res.status(400).json({ error: 'Código e senha são obrigatórios.' });
  }

  try {
    const admin = await prisma.admin.findUnique({
      where: { codigo },
    });

    if (!admin || admin.senha !== senha) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    return res.json({ success: true, redirectTo: '/admin/dashboard' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro no servidor.' });
  }
});

export default router;
