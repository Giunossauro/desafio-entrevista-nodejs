import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../database/database.module';
import { empresasProviders } from './empresa.providers';
import { EmpresaService } from './empresa.service';

describe('EmpresaService', () => {
  let service: EmpresaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [EmpresaService, ...empresasProviders],
    }).compile();

    service = module.get<EmpresaService>(EmpresaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
