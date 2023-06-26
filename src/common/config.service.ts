import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from '../config';

@Injectable()
export class ConfigService {
  constructor(
    @Inject(config.KEY) public ConfigCommData: ConfigType<typeof config>,
  ) {}
}
