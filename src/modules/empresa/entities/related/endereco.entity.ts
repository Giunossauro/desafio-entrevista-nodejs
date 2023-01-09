import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm";
import { Empresa } from "../empresa.entity";

@Entity("enderecos", { database: "estacionamento", schema: "empresas" })
export class Endereco {
  @PrimaryGeneratedColumn("uuid", { name: "endereco_id" })
  enderecoId!: string;

  @ManyToOne(
    () => Empresa,
    (empresa) => empresa.enderecos
  )
  empresa: Empresa;

  @Column({ name: "rua", type: "varchar", length: 100 })
  rua!: string;

  @Column({ name: "numero", type: "varchar", length: 20 })
  numero!: string;

  @Column({ name: "complemento", type: "varchar", length: 30, nullable: true })
  complemento?: string;

  @Column({ name: "bairro", type: "varchar", length: 40 })
  bairro!: string;

  @Column({ name: "cidade", type: "varchar", length: 40 })
  cidade!: string;

  @Column({ name: "uf", type: "varchar", length: 30 })
  uf!: string;

  @Column({ name: "cep", type: "char", length: 11 })
  cep!: string;

  init() {
    this.rua = '';
    this.numero = '';
    this.complemento = '';
    this.bairro = '';
    this.cidade = '';
    this.uf = '';
    this.cep = '';
  }

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
  updatedAt!: Date;

  @DeleteDateColumn({ name: "deleted_at", type: "timestamp" })
  deletedAt?: Date;
}
