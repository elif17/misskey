// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export const packedEmojiSchema = {
	type: 'object',
	properties: {
		id: {
			type: 'string',
			optional: false, nullable: false,
			format: 'id',
			example: 'xxxxxxxxxx',
		},
		aliases: {
			type: 'array',
			optional: false, nullable: false,
			items: {
				type: 'string',
				optional: false, nullable: false,
				format: 'id',
			},
		},
		name: {
			type: 'string',
			optional: false, nullable: false,
		},
		category: {
			type: 'string',
			optional: false, nullable: true,
		},
		host: {
			type: 'string',
			optional: false, nullable: true,
			description: 'The local host is represented with `null`.',
		},
		url: {
			type: 'string',
			optional: false, nullable: false,
		},
	},
} as const;
