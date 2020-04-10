import {MigrationInterface, QueryRunner} from "typeorm";

export class init1586509984963 implements MigrationInterface {
    name = 'init1586509984963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `guild_settings` (`id` varchar(255) NOT NULL, `prefix` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `member_settings` (`id` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user_settings` (`id` varchar(255) NOT NULL, `langCode` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user_settings`", undefined);
        await queryRunner.query("DROP TABLE `member_settings`", undefined);
        await queryRunner.query("DROP TABLE `guild_settings`", undefined);
    }

}
