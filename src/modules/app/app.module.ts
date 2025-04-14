import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsuranceModule } from '../insurance/insurance.module';
import { ConfigModule } from '@nestjs/config';
import { MyLoggerModule } from 'src/logger/logger.module';
import { EnvConfigurations } from 'src/env/env.module';
import { DatabaseModule } from 'src/database/database.module';
import { CommonExceptionFilter } from 'src/middleware/exception.middleware';
import { MorganMiddleware } from '../../middleware/morgan.middleware';

@Module({
  imports: [InsuranceModule, ConfigModule.forRoot(), MyLoggerModule, DatabaseModule, EnvConfigurations],
  controllers: [AppController],
  providers: [
    AppService,

    {
      provide: 'APP_FILTER',
      useClass: CommonExceptionFilter
    }
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // applying morgan middleware for all routes. we can identified the service endpoints
    consumer.apply(MorganMiddleware).forRoutes('*');
  }
}
