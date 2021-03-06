import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from '../components/employee/employee';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      {id: 1, firstName: 'Luckson', lastName: 'Karikoga', dateOfBirth: '1980-11-29', income: 10000, country: 'Zimbabwe'},
      {id: 2, firstName: 'Agnes', lastName: 'Mbalathi', dateOfBirth: '1990-04-29', income: 50000, country: 'South Africa'},
      {id: 3, firstName: 'Craig', lastName: 'Rupiya', dateOfBirth: '1976-1-09', income: 10000, country: 'Zambia'}//,
   //   {id: 4, firstName: 'Lynn', lastName: 'Goodwill', dateOfBirth: '1980-05-19', income: 45000, country: 'Botswana'},
  //    {id: 5, firstName: 'Arnold', lastName: 'Da Silva', dateOfBirth: '1980-04-20', income: 49000, country: 'Mozambique'}
    ];

    return {employees};
  }
}
