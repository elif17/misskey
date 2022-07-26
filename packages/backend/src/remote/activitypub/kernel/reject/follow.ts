// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { CacheableRemoteUser } from '@/models/entities/user.js';
import { remoteReject } from '@/services/following/reject.js';
import { IFollow } from '../../type.js';
import DbResolver from '../../db-resolver.js';
import { relayRejected } from '@/services/relay.js';
import { Users } from '@/models/index.js';

export default async (actor: CacheableRemoteUser, activity: IFollow): Promise<string> => {
	// ※ activityはこっちから投げたフォローリクエストなので、activity.actorは存在するローカルユーザーである必要がある

	const dbResolver = new DbResolver();
	const follower = await dbResolver.getUserFromApId(activity.actor);

	if (follower == null) {
		return `skip: follower not found`;
	}

	if (!Users.isLocalUser(follower)) {
		return `skip: follower is not a local user`;
	}

	// relay
	const match = activity.id?.match(/follow-relay\/(\w+)/);
	if (match) {
		return await relayRejected(match[1]);
	}

	await remoteReject(actor, follower);
	return `ok`;
};
