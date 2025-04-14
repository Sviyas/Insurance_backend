import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GetEnvConfigService {
  constructor(private readonly configService: ConfigService) {}

  get getPort(): number {
    return this.configService.get('PORT', 3000);
  }

  /**
   *@description Development or production
   */
  get appMode(): string {
    return this.configService.get('APP_MODE');
  }

  /**
   * @description Applcation Stable Version
   */
  get appVersion(): string {
    return this.configService.get('APP_VERSION', '/api/v1');
  }
}
