// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import config from '@/config/index.js';
import { Users } from '@/models/index.js';
import { User } from '@/models/entities/user.js';

/**
 * Convert (local|remote)(Follower|Followee)ID to URL
 * @param id Follower|Followee ID
 */
export default async function renderFollowUser(id: User['id']): Promise<any> {
	const user = await Users.findOneByOrFail({ id: id });
	return Users.isLocalUser(user) ? `${config.url}/users/${user.id}` : user.uri;
}
