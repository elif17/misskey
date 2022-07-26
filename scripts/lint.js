// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

const execa = require('execa');

(async () => {
	console.log('linting packages/backend ...');
	await execa('npm', ['run', 'lint'], {
		cwd: __dirname + '/../packages/backend',
		stdout: process.stdout,
		stderr: process.stderr,
	});

	console.log('linting packages/client ...');
	await execa('npm', ['run', 'lint'], {
		cwd: __dirname + '/../packages/client',
		stdout: process.stdout,
		stderr: process.stderr,
	});

	console.log('linting packages/sw ...');
	await execa('npm', ['run', 'lint'], {
		cwd: __dirname + '/../packages/sw',
		stdout: process.stdout,
		stderr: process.stderr,
	});
})();
