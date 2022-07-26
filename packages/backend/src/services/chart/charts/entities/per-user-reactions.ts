// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import Chart from '../../core.js';

export const name = 'perUserReaction';

export const schema = {
	'local.count': { range: 'small' },
	'remote.count': { range: 'small' },
} as const;

export const entity = Chart.schemaToEntity(name, schema, true);
