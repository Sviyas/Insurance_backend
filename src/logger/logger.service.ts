import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as moment from 'moment-timezone';

import { createLogger, format, Logger, transports, Logger as WinstonLogger } from 'winston';
import { FileTransportInstance } from 'winston/lib/winston/transports';
import { GetEnvConfigService } from '../env/env.service';

@Injectable()
export class MyloggerService {
  private logger: WinstonLogger;

  // accessing env files through env config service
  constructor(private readonly configService: GetEnvConfigService) {
    this.setupLogger();
  }

  /**
   * @customLoggerInitialSetup
   */
  private async setupLogger() {
    const serviceType = this.configService.appMode.toLowerCase();

    const logDir = path.resolve(__dirname, '../../src');

    const logFormat = format.combine(
      format.timestamp({
        format: () => moment().format('YYYY-MM-DD HH:mm:ss')
      }),
      format.printf(({ timestamp, level, message }) => `${timestamp} [${level}] : ${message}`)
    );

    // custom logger object
    const loggerConfig = {
      format: logFormat,
      transports: [
        new transports.File({
          filename: path.join(logDir, 'info.log'),
          level: 'info'
        }),
        new transports.File({
          filename: path.join(logDir, 'error.log'),
          level: 'error'
        })
      ]
    };

    // Modify configuration based on the environment
    if (serviceType === 'dev') {
      // delete the logger files consoles enable the console messages
      loggerConfig.transports = [];

      loggerConfig.transports.push(
        new transports.Console({
          format: format.combine(
            format.colorize({
              all: true,
              colors: {
                info: `italic blue`,
                warn: `bold yellow`,
                error: `bold red`
              }
            }),
            logFormat
          )
        }) as unknown as FileTransportInstance
      );

      this.logger = createLogger({
        ...loggerConfig,
        exitOnError: false
      });
    } else {
      // Production mode
      this.logger = createLogger({
        ...loggerConfig,
        exitOnError: false
      });
    }
  }

  /**
   * Logging
   */
  async log(message: string): Promise<Logger | void> {
    try {
      return this.logger.info(message);
    } catch (error) {
      console.log('failed create a info log : ', error);
    }
  }

  /**
   * Warnings
   */
  async warn(message: string): Promise<Logger | void> {
    try {
      return this.logger.warn(message);
    } catch (error) {
      console.log('Failed to create a warn : ', error);
    }
  }

  /**
   * Error
   */
  async error(message: string): Promise<Logger | void> {
    try {
      return this.logger.error(message);
    } catch (error) {
      console.log(`Failed to create a Error Log : `, error);
    }
  }
}
