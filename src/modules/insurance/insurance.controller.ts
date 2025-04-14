import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { Insurance } from './insurance.service';

@Controller('insurance')
export class InsuranceController {
  constructor(private insuranceSerivice: Insurance) {}

  @Get('/list/policies')
  @HttpCode(HttpStatus.OK)
  public async listPolicies() {
    return this.insuranceSerivice.getPolicies();
  }
}
