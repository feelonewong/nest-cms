import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
const prisma = new PrismaClient();

async function run() {
  for (let i = 0; i < 30; i++) {
    await prisma.user.create({
      data: {
        name: Random.cname(),
        password: Random.string(),
        apps: {
          create: {
            title: Random.csentence(),
            content: Random.cparagraph(),
            preview: Random.image('300x300'),
          },
        },
      },
    });
  }
}

run();
