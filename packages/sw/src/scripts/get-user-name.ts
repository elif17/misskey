// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export default function(user: { name?: string | null, username: string }): string {
	return user.name || user.username;
}
