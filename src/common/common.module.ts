import { Global, Module } from '@nestjs/common';
import { ConfigModule as BaseConfigModule } from '@nestjs/config';
import config from '../config';
import { ConfigService } from './config.service';
@Global()
@Module({
  imports: [
    BaseConfigModule.forRoot({
      load: [config],
    }),
  ],
  controllers: [],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class CommonModule {}
