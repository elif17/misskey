// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { DriveFile } from '@/models/entities/drive-file.js';
import { DriveFiles } from '@/models/index.js';

export default (file: DriveFile) => ({
	type: 'Document',
	mediaType: file.type,
	url: DriveFiles.getPublicUrl(file),
	name: file.comment,
});
