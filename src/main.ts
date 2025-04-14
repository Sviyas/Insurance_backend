import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { MyloggerService } from './logger/logger.service';
import { ValidationPipe } from '@nestjs/common';
import { GetEnvConfigService } from './env/env.service';

async function bootstrap() {
  // initiate the applicaiton instance
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // logger: false
  });

  app.enableCors({
    origin: '*'
  });

  /**
   * Logger
   */
  const logger = app.get(MyloggerService);

  /**
   * Register Config path
   */
  const configService = app.get(GetEnvConfigService);

  /***
   * App Version
   */
  const prefixPath = configService.appVersion;

  /**
   * Configure the App Version
   */
  app.setGlobalPrefix(prefixPath);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true
      },
      disableErrorMessages: false
    })
  );

  /**
   * Service Port Number
   */
  const port = configService.getPort;

  /**
   * Service Listening
   */
  await app.listen(port, () => {
    logger.log(`Service Listening on Port : ${process.env.PORT}`);
  });

  process.on('SIGINT', async () => {
    await process.exit(0);
  });
}
bootstrap();
