import { PrismaClient } from '@prisma/client';
const Prism = new PrismaClient();

async function main() {
  for (let i = 0; i < 20; i++) {
    await Prism.user.create({
      data: {
        name: 'abc',
        password: '123',
      },
    });
  }
}

main();
