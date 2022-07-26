// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import config from '@/config/index.js';
import { User } from '@/models/entities/user.js';

export default (user: { id: User['id'] }, target: any, object: any) => ({
	type: 'Remove',
	actor: `${config.url}/users/${user.id}`,
	target,
	object,
});
