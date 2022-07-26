// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { IsNull } from 'typeorm';
import define from '../../../define.js';
import { deleteFile } from '@/services/drive/delete-file.js';
import { DriveFiles } from '@/models/index.js';

export const meta = {
	tags: ['admin'],

	requireCredential: true,
	requireModerator: true,
} as const;

export const paramDef = {
	type: 'object',
	properties: {},
	required: [],
} as const;

// eslint-disable-next-line import/no-default-export
export default define(meta, paramDef, async (ps, me) => {
	const files = await DriveFiles.findBy({
		userId: IsNull(),
	});

	for (const file of files) {
		deleteFile(file);
	}
});
