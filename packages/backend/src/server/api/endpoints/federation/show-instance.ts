// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import define from '../../define.js';
import { Instances } from '@/models/index.js';
import { toPuny } from '@/misc/convert-host.js';

export const meta = {
	tags: ['federation'],

	requireCredential: false,

	res: {
		oneOf: [{
			type: 'object',
			ref: 'FederationInstance',
		}, {
			type: 'null',
		}],
	},
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
	const instance = await Instances
		.findOneBy({ host: toPuny(ps.host) });

	return instance ? await Instances.pack(instance) : null;
});
