import { initialize } from "passport";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne } from "typeorm";
import { Empresa } from "../../entities/empresa.entity";

@Entity("login", { database: "estacionamento", schema: "empresas" })
export class Login {
  @PrimaryGeneratedColumn("uuid", { name: "login_id" })
  loginId!: string;

  @OneToOne(
    () => Empresa,
    (empresa) => empresa.login,
    { nullable: false }
  )
  empresa!: Empresa;

  @Column({ name: "username", type: "varchar", length: 30, nullable: true })
  username?: string;

  @Column({ name: "email", type: "varchar", length: 254, unique: true })
  email!: string;

  @Column({ name: "outro_email", type: "varchar", length: 254, nullable: true })
  outroEmail?: string;

  @Column({ name: "email_confirmado", type: "boolean", default: false })
  emailConfirmado?: boolean;

  @Column({ name: "password", type: "varchar", length: 127 })
  password!: string;

  @Column({ name: "salt", type: "char", length: 63, nullable: true })
  salt?: string; // gen random?

  @Column({ name: "two_factor_enabled", type: "boolean", nullable: true })
  twoFactorEnabled?: boolean;

  @Column({ name: "lockout_enabled", type: "boolean", nullable: true })
  lockoutEnabled?: boolean;

  @Column({ name: "lockout_end_date_utc", type: "timestamp", nullable: true/* , default: ((new Date).getTime() + 1800000) */ })
  lockoutEndDateUTC?: Date;

  @Column({ name: "access_failed_count", type: "integer", default: 0 })
  accessFailedCount!: number; // make auto update

  init() {
    this.username = '';
    this.email = '';
    this.outroEmail = '';
    this.emailConfirmado = false;
    this.password = '';
    this.salt = '';
    this.twoFactorEnabled = false;
    this.lockoutEnabled = false;
    this.lockoutEndDateUTC = new Date();
    this.accessFailedCount = 0;
  }

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
  updatedAt!: Date;

  @DeleteDateColumn({ name: "deleted_at", type: "timestamp" })
  deletedAt?: Date;
}
