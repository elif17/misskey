// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { getJsonSchema } from '@/services/chart/core.js';
import { activeUsersChart } from '@/services/chart/index.js';
import define from '../../define.js';

export const meta = {
	tags: ['charts', 'users'],

	res: getJsonSchema(activeUsersChart.schema),

	allowGet: true,
	cacheSec: 60 * 60,
} as const;

export const paramDef = {
	type: 'object',
	properties: {
		span: { type: 'string', enum: ['day', 'hour'] },
		limit: { type: 'integer', minimum: 1, maximum: 500, default: 30 },
		offset: { type: 'integer', nullable: true, default: null },
	},
	required: ['span'],
} as const;

// eslint-disable-next-line import/no-default-export
export default define(meta, paramDef, async (ps) => {
	return await activeUsersChart.getChart(ps.span, ps.limit, ps.offset ? new Date(ps.offset) : null);
});
