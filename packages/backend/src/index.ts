// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

/**
 * Misskey Entry Point!
 */

import { EventEmitter } from 'node:events';
import boot from './boot/index.js';

Error.stackTraceLimit = Infinity;
EventEmitter.defaultMaxListeners = 128;

boot().catch(err => {
	console.error(err);
});
