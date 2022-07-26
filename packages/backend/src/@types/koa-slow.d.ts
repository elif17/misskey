// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

declare module 'koa-slow' {
	import { Middleware } from 'koa';

	interface ISlowOptions {
		url?: RegExp;
		delay?: number;
	}

	function slow(options?: ISlowOptions): Middleware;

	namespace slow {} // Hack

	export = slow;
}
