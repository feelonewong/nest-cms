import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from '../config';

@Controller('config')
export class ConfigController {
  constructor(
    @Inject(config.KEY)
    private readonly confrguration: ConfigType<typeof config>,
  ) {}

  @Get()
  getHello() {
    return this.confrguration.name + this.confrguration.city;
    // return this.configService.get('name');
  }
}
