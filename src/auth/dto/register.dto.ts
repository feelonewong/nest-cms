import { IsNotEmpty, Length, Matches } from 'class-validator';
import { IsNotExists } from '../../validate/is-not-exists/is-not-exists';

export class RegisterDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(3, 20, { message: '用户名长度为3到20个字符' })
  @Matches(/^[a-zA-Z0-9_-]{3,20}$/, { message: '用户名不合法' })
  @IsNotExists('user', { message: '用户名已存在' })
  name: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @Length(6, 20, { message: '密码长度为6到20个字符' })
  password: string;
}
