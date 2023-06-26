import { Global, Module } from '@nestjs/common';
import { ConfigController } from './config.controller';
import { ConfigModule as BaseConfigModule } from '@nestjs/config';
import config from '../config';
@Global()
@Module({
  imports: [
    BaseConfigModule.forRoot({
      load: [config],
    }),
  ],
  controllers: [ConfigController],
  providers: [],
})
export class ConfigModule {}
