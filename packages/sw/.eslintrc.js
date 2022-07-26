// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

module.exports = {
	root: true,
	env: {
		"node": false
	},
	parserOptions: {
		"parser": "@typescript-eslint/parser",
		tsconfigRootDir: __dirname,
		//project: ['./tsconfig.json'],
	},
	extends: [
		//"../shared/.eslintrc.js",
	],
	globals: {
		"require": false,
		"_DEV_": false,
		"_LANGS_": false,
		"_VERSION_": false,
		"_ENV_": false,
		"_PERF_PREFIX_": false,
	}
}
