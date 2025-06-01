const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.admin.upsert({
    where: { codigo: 271157 },
    update: {},
    create: {
      codigo: 271157,
      senha: 'descubramoraujo123',
    },
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
