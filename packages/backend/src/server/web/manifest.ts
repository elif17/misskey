// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import Koa from 'koa';
import { fetchMeta } from '@/misc/fetch-meta.js';
import manifest from './manifest.json' assert { type: 'json' };

export const manifestHandler = async (ctx: Koa.Context) => {
	// TODO
	//const res = structuredClone(manifest);
	const res = JSON.parse(JSON.stringify(manifest));

	const instance = await fetchMeta(true);

	res.short_name = instance.name || 'Misskey';
	res.name = instance.name || 'Misskey';
	if (instance.themeColor) res.theme_color = instance.themeColor;

	ctx.set('Cache-Control', 'max-age=300');
	ctx.body = res;
};
