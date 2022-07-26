// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import Chart from '../../core.js';

export const name = 'hashtag';

export const schema = {
	'local.users': { uniqueIncrement: true },
	'remote.users': { uniqueIncrement: true },
} as const;

export const entity = Chart.schemaToEntity(name, schema, true);
