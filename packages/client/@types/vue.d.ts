// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

/// <reference types="vue/macros-global" />

declare module '*.vue' {
	import type { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
