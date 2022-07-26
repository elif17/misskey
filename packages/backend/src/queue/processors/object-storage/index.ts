// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import Bull from 'bull';
import { ObjectStorageJobData } from '@/queue/types.js';
import deleteFile from './delete-file.js';
import cleanRemoteFiles from './clean-remote-files.js';

const jobs = {
	deleteFile,
	cleanRemoteFiles,
} as Record<string, Bull.ProcessCallbackFunction<ObjectStorageJobData> | Bull.ProcessPromiseFunction<ObjectStorageJobData>>;

export default function(q: Bull.Queue) {
	for (const [k, v] of Object.entries(jobs)) {
		q.process(k, 16, v);
	}
}
