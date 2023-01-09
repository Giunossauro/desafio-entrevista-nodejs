import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm";
import { Empresa } from "../../entities/empresa.entity";

@Entity("veiculo", { database: "estacionamento", schema: "empresa" })
export class Veiculo {
  @PrimaryGeneratedColumn("uuid", { name: "veiculo_id" })
  veiculoId!: string;

  @ManyToOne(
    () => Empresa,
    (empresa) => empresa.veiculos
  )
  empresa: Empresa;

  @Column({ name: "marca", type: "varchar", length: 20 })
  marca!: string;

  @Column({ name: "modelo", type: "varchar", length: 40 })
  modelo!: string;

  @Column({ name: "cor", type: "varchar", length: 25 })
  cor?: string;

  @Column({ name: "placa", type: "char", length: 7 })
  placa!: string;

  @Column({ name: "tipo", type: "char", length: 1 })
  tipo!: string; // m = moto | c = carro

  init() {
    this.marca = '';
    this.modelo = '';
    this.cor = '';
    this.placa = '';
    this.tipo = '';
  }

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
  updatedAt!: Date;

  @DeleteDateColumn({ name: "deleted_at", type: "timestamp" })
  deletedAt?: Date;
}
