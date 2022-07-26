// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

export type Acct = {
	username: string;
	host: string | null;
};

export function parse(acct: string): Acct {
	if (acct.startsWith('@')) acct = acct.substr(1);
	const split = acct.split('@', 2);
	return { username: split[0], host: split[1] || null };
}

export function toString(acct: Acct): string {
	return acct.host == null ? acct.username : `${acct.username}@${acct.host}`;
}
