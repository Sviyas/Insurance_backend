import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class Insurance {
  constructor(private databaseService: DatabaseService) {}

  public async getPolicies() {
    try {
      const data = await this.databaseService.insurancePolicies();

      const totalPoliciesName = new Set(data.map(d => d.name)).size;

      const totalPoliciesType = new Set(data.map(d => d.type)).size;

      return {
        status: true,
        message: 'Succesffully Fetched Policies',
        data: {
          totalPolicies: totalPoliciesName,
          totalPolicyTypes: totalPoliciesType,
          totalCurrentPolicies: data.length,
          rows: data
        }
      };
    } catch (error) {
      throw error;
    }
  }
}
