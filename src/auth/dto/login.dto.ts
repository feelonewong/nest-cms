import { RegisterDto } from './register.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, Length } from 'class-validator';

export class LoginDto extends PartialType(RegisterDto) {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(3, 20, { message: '用户名长度为3到20个字符' })
  name: string;
}
