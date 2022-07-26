// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { ObjectStorageFileJobData } from '@/queue/types.js';
import Bull from 'bull';
import { deleteObjectStorageFile } from '@/services/drive/delete-file.js';

export default async (job: Bull.Job<ObjectStorageFileJobData>) => {
	const key: string = job.data.key;

	await deleteObjectStorageFile(key);

	return 'Success';
};
