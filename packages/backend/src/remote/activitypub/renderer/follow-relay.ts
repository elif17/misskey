// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import config from '@/config/index.js';
import { Relay } from '@/models/entities/relay.js';
import { ILocalUser } from '@/models/entities/user.js';

export function renderFollowRelay(relay: Relay, relayActor: ILocalUser) {
	const follow = {
		id: `${config.url}/activities/follow-relay/${relay.id}`,
		type: 'Follow',
		actor: `${config.url}/users/${relayActor.id}`,
		object: 'https://www.w3.org/ns/activitystreams#Public',
	};

	return follow;
}
