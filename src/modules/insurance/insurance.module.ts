import { Module } from '@nestjs/common';
import { InsuranceController } from './insurance.controller';
import { Insurance } from './insurance.service';

@Module({
  controllers: [InsuranceController],
  providers: [Insurance]
})
export class InsuranceModule {}

