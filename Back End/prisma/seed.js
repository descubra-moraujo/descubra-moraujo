// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.admin.upsert({
    where: { codigo: '123456' },
    update: {},
    create: {
      codigo: '123456', // apenas números
      senha: 'admin123', // números e letras
    },
  });
}

main().finally(() => prisma.$disconnect());
