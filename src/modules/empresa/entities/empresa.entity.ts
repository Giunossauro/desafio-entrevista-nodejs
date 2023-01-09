import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Endereco } from "./related/endereco.entity";
import { Login } from "./related/login.entity";
import { Veiculo } from "./related/veiculo.entity";

@Entity("empresa", { database: "estacionamento", schema: "empresa" })
export class Empresa {
  @PrimaryGeneratedColumn("uuid", { name: "empresa_id" })
  empresaId!: string;

  @Column({ name: "nome", type: "varchar", length: 150 })
  nome!: string;

  @Column({ name: "cnpj", type: "char", length: 14, unique: true })
  cnpj!: string;

  @Column({ name: "telefone", type: "varchar", length: 11 })
  telefone!: string;

  @Column({ name: "qtd_vagas_carros", type: "smallint", default: 0 })
  qtdVagasCarros!: number;

  @Column({ name: "qtd_vagas_motos", type: "smallint", default: 0 })
  qtdVagasMotos!: number;

  @OneToOne(
    () => Login,
    (login) => login.empresa,
    { nullable: false, cascade: true }
  )
  @JoinColumn()
  login!: Login;

  @JoinTable({ name: "empresa_enderecos" })
  @OneToMany(
    () => Endereco,
    (endereco) => endereco.empresa,
    { cascade: true }
  )
  enderecos: Endereco[];

  @JoinTable({ name: "empresa_veiculos" })
  @OneToMany(
    () => Veiculo,
    (veiculo) => veiculo.empresa,
    { cascade: true }
  )
  veiculos: Veiculo[];

  init() {
    this.empresaId = '';
    this.nome = '';
    this.cnpj = '';
    this.qtdVagasCarros = 0;
    this.qtdVagasMotos = 0;
  }

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
  updatedAt!: Date;

  @DeleteDateColumn({ name: "deleted_at", type: "timestamp" })
  deletedAt?: Date;
}
