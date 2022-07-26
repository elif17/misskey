// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import define from '../../../define.js';
import deleteFollowing from '@/services/following/delete.js';
import { Followings, Users } from '@/models/index.js';

export const meta = {
	tags: ['admin'],

	requireCredential: true,
	requireModerator: true,
} as const;

export const paramDef = {
	type: 'object',
	properties: {
		host: { type: 'string' },
	},
	required: ['host'],
} as const;

// eslint-disable-next-line import/no-default-export
export default define(meta, paramDef, async (ps, me) => {
	const followings = await Followings.findBy({
		followerHost: ps.host,
	});

	const pairs = await Promise.all(followings.map(f => Promise.all([
		Users.findOneByOrFail({ id: f.followerId }),
		Users.findOneByOrFail({ id: f.followeeId }),
	])));

	for (const pair of pairs) {
		deleteFollowing(pair[0], pair[1]);
	}
});
