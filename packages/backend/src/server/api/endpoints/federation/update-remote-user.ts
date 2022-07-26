// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import define from '../../define.js';
import { getRemoteUser } from '../../common/getters.js';
import { updatePerson } from '@/remote/activitypub/models/person.js';

export const meta = {
	tags: ['federation'],

	requireCredential: true,
} as const;

export const paramDef = {
	type: 'object',
	properties: {
		userId: { type: 'string', format: 'misskey:id' },
	},
	required: ['userId'],
} as const;

// eslint-disable-next-line import/no-default-export
export default define(meta, paramDef, async (ps) => {
	const user = await getRemoteUser(ps.userId);
	await updatePerson(user.uri!);
});
