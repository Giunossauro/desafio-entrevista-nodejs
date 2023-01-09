import { MigrationInterface, QueryRunner } from "typeorm";

export class test1673217770171 implements MigrationInterface {
    name = 'test1673217770171'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`enderecos\` (\`endereco_id\` varchar(36) NOT NULL, \`rua\` varchar(100) NOT NULL, \`numero\` varchar(20) NOT NULL, \`complemento\` varchar(30) NULL, \`bairro\` varchar(40) NOT NULL, \`cidade\` varchar(40) NOT NULL, \`uf\` varchar(30) NOT NULL, \`cep\` char(11) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`empresaEmpresaId\` varchar(36) NULL, PRIMARY KEY (\`endereco_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`login\` (\`login_id\` varchar(36) NOT NULL, \`username\` varchar(30) NULL, \`email\` varchar(254) NOT NULL, \`outro_email\` varchar(254) NULL, \`email_confirmado\` tinyint NOT NULL DEFAULT 0, \`password\` varchar(127) NOT NULL, \`salt\` char(63) NULL, \`two_factor_enabled\` tinyint NULL, \`lockout_enabled\` tinyint NULL, \`lockout_end_date_utc\` timestamp NULL, \`access_failed_count\` int NOT NULL DEFAULT '0', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, UNIQUE INDEX \`IDX_a1fa377d7cba456bebaa6922ed\` (\`email\`), PRIMARY KEY (\`login_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`veiculo\` (\`veiculo_id\` varchar(36) NOT NULL, \`marca\` varchar(20) NOT NULL, \`modelo\` varchar(40) NOT NULL, \`cor\` varchar(25) NOT NULL, \`placa\` char(7) NOT NULL, \`tipo\` char(1) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`empresaEmpresaId\` varchar(36) NULL, PRIMARY KEY (\`veiculo_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`treatments\` (\`empresa_id\` varchar(36) NOT NULL, \`nome\` varchar(150) NOT NULL, \`cnpj\` char(14) NOT NULL, \`telefone\` varchar(11) NOT NULL, \`qtd_vagas_carros\` smallint NOT NULL DEFAULT '0', \`qtd_vagas_motos\` smallint NOT NULL DEFAULT '0', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`loginLoginId\` varchar(36) NOT NULL, UNIQUE INDEX \`IDX_d3ea133d46574b9593558aed2c\` (\`cnpj\`), UNIQUE INDEX \`REL_e20650622abd7cfa86eb6bcc65\` (\`loginLoginId\`), PRIMARY KEY (\`empresa_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`enderecos\` ADD CONSTRAINT \`FK_1ee0c777707c2fc435ae623b399\` FOREIGN KEY (\`empresaEmpresaId\`) REFERENCES \`treatments\`(\`empresa_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`veiculo\` ADD CONSTRAINT \`FK_8f73c1a98df1f67c0c3e6bf7c7c\` FOREIGN KEY (\`empresaEmpresaId\`) REFERENCES \`treatments\`(\`empresa_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`treatments\` ADD CONSTRAINT \`FK_e20650622abd7cfa86eb6bcc654\` FOREIGN KEY (\`loginLoginId\`) REFERENCES \`login\`(\`login_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`treatments\` DROP FOREIGN KEY \`FK_e20650622abd7cfa86eb6bcc654\``);
        await queryRunner.query(`ALTER TABLE \`veiculo\` DROP FOREIGN KEY \`FK_8f73c1a98df1f67c0c3e6bf7c7c\``);
        await queryRunner.query(`ALTER TABLE \`enderecos\` DROP FOREIGN KEY \`FK_1ee0c777707c2fc435ae623b399\``);
        await queryRunner.query(`DROP INDEX \`REL_e20650622abd7cfa86eb6bcc65\` ON \`treatments\``);
        await queryRunner.query(`DROP INDEX \`IDX_d3ea133d46574b9593558aed2c\` ON \`treatments\``);
        await queryRunner.query(`DROP TABLE \`treatments\``);
        await queryRunner.query(`DROP TABLE \`veiculo\``);
        await queryRunner.query(`DROP INDEX \`IDX_a1fa377d7cba456bebaa6922ed\` ON \`login\``);
        await queryRunner.query(`DROP TABLE \`login\``);
        await queryRunner.query(`DROP TABLE \`enderecos\``);
    }

}
