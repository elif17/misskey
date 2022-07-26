// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import Resolver from '../../resolver.js';
import { CacheableRemoteUser } from '@/models/entities/user.js';
import acceptFollow from './follow.js';
import { IAccept, isFollow, getApType } from '../../type.js';
import { apLogger } from '../../logger.js';

const logger = apLogger;

export default async (actor: CacheableRemoteUser, activity: IAccept): Promise<string> => {
	const uri = activity.id || activity;

	logger.info(`Accept: ${uri}`);

	const resolver = new Resolver();

	const object = await resolver.resolve(activity.object).catch(e => {
		logger.error(`Resolution failed: ${e}`);
		throw e;
	});

	if (isFollow(object)) return await acceptFollow(actor, object);

	return `skip: Unknown Accept type: ${getApType(object)}`;
};
