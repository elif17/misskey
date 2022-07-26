// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { createTemp } from './create-temp.js';
import { downloadUrl } from './download-url.js';
import { detectType } from './get-file-info.js';

export async function detectUrlMime(url: string) {
	const [path, cleanup] = await createTemp();

	try {
		await downloadUrl(url, path);
		const { mime } = await detectType(path);
		return mime;
	} finally {
		cleanup();
	}
}
