import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GetEnvConfigService } from './env.service';

@Global()
@Module({
  imports: [ConfigModule.forRoot()],
  providers: [GetEnvConfigService],
  exports: [GetEnvConfigService]
})
export class EnvConfigurations {}
