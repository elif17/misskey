// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export class deleteLog1634902659689 {
    constructor() {
        this.name = 'deleteLog1634902659689';
    }
    async up(queryRunner) {
        await queryRunner.query(`DROP TABLE "log"`);
    }
    async down(queryRunner) {
    }
}
