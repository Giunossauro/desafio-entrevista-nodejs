import { IsString } from "class-validator";

export class CreateEmpresaDto {
  @IsString()
  readonly nome!: string;

  @IsString()
  readonly cnpj!: string;

  @IsString()
  readonly telefone!: string;

  @IsString()
  readonly qtdVagasCarros!: number;

  @IsString()
  readonly qtdVagasMotos!: number;
}
