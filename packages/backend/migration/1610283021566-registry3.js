// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export class registry31610283021566 {
    constructor() {
        this.name = 'registry31610283021566';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "registry_item" ALTER COLUMN "value" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "registry_item" ALTER COLUMN "value" SET NOT NULL`);
    }
}
