import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../database/database.module';
import { EmpresaController } from './empresa.controller';
import { empresasProviders } from './empresa.providers';
import { EmpresaService } from './empresa.service';

describe('EmpresaController', () => {
  let controller: EmpresaController;

  const mockEmpresaService = {
    create: jest.fn(dto => {
      return {
        empresaId: Date.now(),
        ...dto
      }
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpresaController],
      providers: [EmpresaService],
    })
      .overrideProvider(EmpresaService)
      .useValue(mockEmpresaService)
      .compile();

    controller = module.get<EmpresaController>(EmpresaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an empresa', () => {
    expect(controller.create({
      nome: "Empresa 1",
      cnpj: "12345678000910",
      telefone: "11987654321",
      qtdVagasCarros: 12,
      qtdVagasMotos: 10
    })).toBeDefined();
  });
});
