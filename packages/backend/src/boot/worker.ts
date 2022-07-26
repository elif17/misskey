// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import cluster from 'node:cluster';
import { initDb } from '../db/postgre.js';

/**
 * Init worker process
 */
export async function workerMain() {
	await initDb();

	// start server
	await import('../server/index.js').then(x => x.default());

	// start job queue
	import('../queue/index.js').then(x => x.default());

	if (cluster.isWorker) {
		// Send a 'ready' message to parent process
		process.send!('ready');
	}
}
