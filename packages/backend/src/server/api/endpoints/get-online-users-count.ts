// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { MoreThan } from 'typeorm';
import { USER_ONLINE_THRESHOLD } from '@/const.js';
import { Users } from '@/models/index.js';
import define from '../define.js';

export const meta = {
	tags: ['meta'],

	requireCredential: false,
} as const;

export const paramDef = {
	type: 'object',
	properties: {},
	required: [],
} as const;

// eslint-disable-next-line import/no-default-export
export default define(meta, paramDef, async () => {
	const count = await Users.countBy({
		lastActiveDate: MoreThan(new Date(Date.now() - USER_ONLINE_THRESHOLD)),
	});

	return {
		count,
	};
});
