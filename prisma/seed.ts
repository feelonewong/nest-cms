import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
const Prism = new PrismaClient();

async function main() {
  for (let i = 0; i < 20; i++) {
    await Prism.user.create({
      data: {
        name: Random.cname(),
        password: Random.string(8),
      },
    });
  }
}

main();
