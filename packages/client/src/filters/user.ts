// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import * as misskey from 'misskey-js';
import * as Acct from 'misskey-js/built/acct';
import { url } from '@/config';

export const acct = (user: misskey.Acct) => {
	return Acct.toString(user);
};

export const userName = (user: misskey.entities.User) => {
	return user.name || user.username;
};

export const userPage = (user: misskey.Acct, path?, absolute = false) => {
	return `${absolute ? url : ''}/@${acct(user)}${(path ? `/${path}` : '')}`;
};
