import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const senhaHash = await bcrypt.hash('senha123', 10); // Criptografa senha

  await prisma.admin.create({
    data: {
      codigo: 'admin123',
      senha: senhaHash
    }
  });

  console.log('Admin criado com senha segura!');
} 

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
