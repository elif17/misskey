// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export function safeForSql(text: string): boolean {
	return !/[\0\x08\x09\x1a\n\r"'\\\%]/g.test(text);
}
