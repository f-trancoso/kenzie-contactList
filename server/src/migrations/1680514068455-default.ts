import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680514068455 implements MigrationInterface {
    name = 'default1680514068455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '"2023-04-03T09:27:51.401Z"'`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "created_at" SET DEFAULT '"2023-04-03T09:27:51.402Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "created_at" SET DEFAULT '2023-04-03 08:50:31.171'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-04-03 08:50:31.172'`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
    }

}
