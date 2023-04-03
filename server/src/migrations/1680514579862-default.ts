import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680514579862 implements MigrationInterface {
    name = 'default1680514579862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "created_at" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "created_at" SET DEFAULT '2023-04-03 09:27:51.402'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-04-03 09:27:51.401'`);
    }

}
