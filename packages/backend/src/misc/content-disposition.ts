// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import cd from 'content-disposition';

export function contentDisposition(type: 'inline' | 'attachment', filename: string): string {
	const fallback = filename.replace(/[^\w.-]/g, '_');
	return cd(filename, { type, fallback });
}
