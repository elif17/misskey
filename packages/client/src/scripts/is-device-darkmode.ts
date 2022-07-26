// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export function isDeviceDarkmode() {
	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
