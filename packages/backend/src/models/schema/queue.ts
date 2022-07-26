// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export const packedQueueCountSchema = {
	type: 'object',
	properties: {
		waiting: {
			type: 'number',
			optional: false, nullable: false,
		},
		active: {
			type: 'number',
			optional: false, nullable: false,
		},
		completed: {
			type: 'number',
			optional: false, nullable: false,
		},
		failed: {
			type: 'number',
			optional: false, nullable: false,
		},
		delayed: {
			type: 'number',
			optional: false, nullable: false,
		},
	},
} as const;
