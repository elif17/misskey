// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export function isDuplicateKeyValueError(e: unknown | Error): boolean {
	return (e as any).message && (e as Error).message.startsWith('duplicate key value');
}
