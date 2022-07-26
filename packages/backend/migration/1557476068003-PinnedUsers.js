// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export class PinnedUsers1557476068003 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" ADD "pinnedUsers" character varying(256) array NOT NULL DEFAULT '{}'::varchar[]`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" DROP COLUMN "pinnedUsers"`);
    }
}
