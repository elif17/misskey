// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export class antennaExclude1582210532752 {
    constructor() {
        this.name = 'antennaExclude1582210532752';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "antenna" ADD "excludeKeywords" jsonb NOT NULL DEFAULT '[]'`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "antenna" DROP COLUMN "excludeKeywords"`, undefined);
    }
}
