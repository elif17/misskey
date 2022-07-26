// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export class v1231579282808087 {
    constructor() {
        this.name = 'v1231579282808087';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "announcement" ADD "updatedAt" TIMESTAMP WITH TIME ZONE`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "updatedAt"`, undefined);
    }
}
