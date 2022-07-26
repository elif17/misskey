// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import * as Misskey from 'misskey-js';
import { markRaw } from 'vue';
import { $i } from '@/account';
import { url } from '@/config';

export const stream = markRaw(new Misskey.Stream(url, $i ? {
	token: $i.token,
} : null));
