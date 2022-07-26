// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import define from '../define.js';
import endpoints from '../endpoints.js';

export const meta = {
	requireCredential: false,

	tags: ['meta'],

	res: {
		type: 'array',
		optional: false, nullable: false,
		items: {
			type: 'string',
			optional: false, nullable: false,
		},
		example: [
			'admin/abuse-user-reports',
			'admin/accounts/create',
			'admin/announcements/create',
			'...',
		],
	},
} as const;

export const paramDef = {
	type: 'object',
	properties: {},
	required: [],
} as const;

// eslint-disable-next-line import/no-default-export
export default define(meta, paramDef, async () => {
	return endpoints.map(x => x.name);
});
