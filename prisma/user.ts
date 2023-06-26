import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
const prisma = new PrismaClient();

export async function formateUser() {
  // 找到1号用户 重命名为admin
  const user = await prisma.user.findFirst({
    orderBy: {
      id: 'asc',
    },
    take: 1,
  });
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: 'admin',
      password: 'admin888',
    },
  });
}
