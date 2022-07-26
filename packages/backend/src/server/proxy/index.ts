// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

/**
 * Media Proxy
 */

import Koa from 'koa';
import cors from '@koa/cors';
import Router from '@koa/router';
import { proxyMedia } from './proxy-media.js';

// Init app
const app = new Koa();
app.use(cors());
app.use(async (ctx, next) => {
	ctx.set('Content-Security-Policy', `default-src 'none'; img-src 'self'; media-src 'self'; style-src 'unsafe-inline'`);
	await next();
});

// Init router
const router = new Router();

router.get('/:url*', proxyMedia);

// Register router
app.use(router.routes());

export default app;
