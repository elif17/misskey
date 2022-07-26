// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export class deleteAutoWatch1604821689616 {
    constructor() {
        this.name = 'deleteAutoWatch1604821689616';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_profile" DROP COLUMN "autoWatch"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_profile" ADD "autoWatch" boolean NOT NULL DEFAULT false`);
    }
}
