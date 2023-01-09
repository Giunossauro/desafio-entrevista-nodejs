import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { DatabaseModule } from '../../database/database.module';
import { empresasProviders } from './empresa.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [EmpresaController],
  providers: [EmpresaService, ...empresasProviders]
})
export class EmpresaModule {}
