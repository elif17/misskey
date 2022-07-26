// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export class removeMaxNoteTextLength1645340161439 {
    name = 'removeMaxNoteTextLength1645340161439'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" DROP COLUMN "maxNoteTextLength"`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" ADD "maxNoteTextLength" integer NOT NULL DEFAULT '500'`);
    }
}
