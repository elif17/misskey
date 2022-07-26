// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import Resolver from '../../resolver.js';
import { CacheableRemoteUser } from '@/models/entities/user.js';
import announceNote from './note.js';
import { IAnnounce, getApId } from '../../type.js';
import { apLogger } from '../../logger.js';

const logger = apLogger;

export default async (actor: CacheableRemoteUser, activity: IAnnounce): Promise<void> => {
	const uri = getApId(activity);

	logger.info(`Announce: ${uri}`);

	const resolver = new Resolver();

	const targetUri = getApId(activity.object);

	announceNote(resolver, actor, activity, targetUri);
};
