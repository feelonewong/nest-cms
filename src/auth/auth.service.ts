import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { hash } from 'argon2';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  public async register(dto: RegisterDto) {
    const registerUser = await this.prismaService.user.create({
      data: {
        name: dto.name,
        password: await hash(dto.password),
      },
    });
    return registerUser;
  }

  public async login(dto: LoginDto) {
    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [{ name: dto.name }, { email: dto.name }, { mobile: dto.name }],
      },
    });
    if (!user) {
      throw new BadRequestException('用户名不存在');
    }
    return user;
  }
}
