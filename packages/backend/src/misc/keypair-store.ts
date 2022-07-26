// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { UserKeypairs } from '@/models/index.js';
import { User } from '@/models/entities/user.js';
import { UserKeypair } from '@/models/entities/user-keypair.js';
import { Cache } from './cache.js';

const cache = new Cache<UserKeypair>(Infinity);

export async function getUserKeypair(userId: User['id']): Promise<UserKeypair> {
	return await cache.fetch(userId, () => UserKeypairs.findOneByOrFail({ userId: userId }));
}
