// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export class noteReactionLength1582875306439 {
    constructor() {
        this.name = 'noteReactionLength1582875306439';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note_reaction" ALTER COLUMN "reaction" TYPE character varying(130)`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note_reaction" ALTER COLUMN "reaction" TYPE character varying(128)`, undefined);
    }
}
