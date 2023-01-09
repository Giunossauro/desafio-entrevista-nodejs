import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresaService {
  @Inject("EMPRESAS_REPOSITORY")
  private empresasRepository: Repository<Empresa>;

  create(createEmpresaDto: CreateEmpresaDto) {
    return 'This action adds a new empresa';
  }

  findAll() {
    return this.empresasRepository.findOne({where: {empresaId: "123A"}});
  }

  findOne(id: number) {
    return `This action returns a #${id} empresa`;
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return `This action updates a #${id} empresa`;
  }

  remove(id: number) {
    return `This action removes a #${id} empresa`;
  }
}
