// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

declare module 'koa-json-body' {
	import { Middleware } from 'koa';

	interface IKoaJsonBodyOptions {
		strict: boolean;
		limit: string;
		fallback: boolean;
	}

	function koaJsonBody(opt?: IKoaJsonBodyOptions): Middleware;

	namespace koaJsonBody {} // Hack

	export = koaJsonBody;
}
