// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import * as tmp from 'tmp';

export function createTemp(): Promise<[string, () => void]> {
	return new Promise<[string, () => void]>((res, rej) => {
		tmp.file((e, path, fd, cleanup) => {
			if (e) return rej(e);
			res([path, cleanup]);
		});
	});
}

export function createTempDir(): Promise<[string, () => void]> {
	return new Promise<[string, () => void]>((res, rej) => {
		tmp.dir(
			{
				unsafeCleanup: true,
			},
			(e, path, cleanup) => {
				if (e) return rej(e);
				res([path, cleanup]);
			}
		);
	});
}
