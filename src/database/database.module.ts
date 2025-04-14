import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { MyLoggerModule } from '../logger/logger.module';

@Global()
@Module({
  imports: [MyLoggerModule],
  providers: [DatabaseService],
  exports: [DatabaseService]
})
export class DatabaseModule {}
