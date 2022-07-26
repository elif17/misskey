// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import define from '../../../define.js';
import { createImportCustomEmojisJob } from '@/queue/index.js';
import ms from 'ms';

export const meta = {
	secure: true,
	requireCredential: true,
	requireModerator: true,
} as const;

export const paramDef = {
	type: 'object',
	properties: {
		fileId: { type: 'string', format: 'misskey:id' },
	},
	required: ['fileId'],
} as const;

// eslint-disable-next-line import/no-default-export
export default define(meta, paramDef, async (ps, user) => {
	createImportCustomEmojisJob(user, ps.fileId);
});
