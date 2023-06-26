import { Controller, Get } from '@nestjs/common';
import { ConfigService } from './common/config.service';

@Controller()
export class AppController {
  constructor(private readonly config: ConfigService) {}

  @Get()
  getHello(): string {
    return this.config.ConfigCommData.city;
  }
}
