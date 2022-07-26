// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export class userInstanceBlocks1629968054000 {
	constructor() {
		this.name = 'userInstanceBlocks1629968054000';
	}
	async up(queryRunner) {
		await queryRunner.query(`ALTER TABLE "user_profile" ADD "mutedInstances" jsonb NOT NULL DEFAULT '[]'`);
		await queryRunner.query(`COMMENT ON COLUMN "user_profile"."mutedInstances" IS 'List of instances muted by the user.'`);
	}
	async down(queryRunner) {
		await queryRunner.query(`ALTER TABLE "user_profile" DROP COLUMN "mutedInstances"`);
	}
}
