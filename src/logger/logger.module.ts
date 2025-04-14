import { Global, Module } from '@nestjs/common';
import { MyloggerService } from './logger.service';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [MyloggerService],
  exports: [MyloggerService]
})
export class MyLoggerModule {}
