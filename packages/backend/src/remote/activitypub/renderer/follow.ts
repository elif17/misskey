// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import config from '@/config/index.js';
import { User } from '@/models/entities/user.js';
import { Users } from '@/models/index.js';

export default (follower: { id: User['id']; host: User['host']; uri: User['host'] }, followee: { id: User['id']; host: User['host']; uri: User['host'] }, requestId?: string) => {
	const follow = {
		id: requestId ?? `${config.url}/follows/${follower.id}/${followee.id}`,
		type: 'Follow',
		actor: Users.isLocalUser(follower) ? `${config.url}/users/${follower.id}` : follower.uri,
		object: Users.isLocalUser(followee) ? `${config.url}/users/${followee.id}` : followee.uri,
	} as any;

	return follow;
};
