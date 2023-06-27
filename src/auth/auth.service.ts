import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { hash } from 'argon2';

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
}
