// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import Redis from 'ioredis';
import config from '@/config/index.js';

export function createConnection() {
	return new Redis({
		port: config.redis.port,
		host: config.redis.host,
		family: config.redis.family == null ? 0 : config.redis.family,
		password: config.redis.pass,
		keyPrefix: `${config.redis.prefix}:`,
		db: config.redis.db || 0,
	});
}

export const subsdcriber = createConnection();
subsdcriber.subscribe(config.host);

export const redisClient = createConnection();
