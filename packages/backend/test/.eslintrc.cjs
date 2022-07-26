// SPDX-FileCopyrightText: 2022, Shinoda Eiji <syuilotan@yahoo.co.jp>
// SPDX-License-Identifier: AGPL-3.0-only




module.exports = {
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	extends: ['../.eslintrc.cjs'],
	env: {
		node: true,
		mocha: true,
	},
};
