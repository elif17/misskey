// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

const fs = require('fs');

(async () => {
	fs.rmSync(__dirname + '/../packages/backend/built', { recursive: true, force: true });
	fs.rmSync(__dirname + '/../packages/client/built', { recursive: true, force: true });
	fs.rmSync(__dirname + '/../packages/sw/built', { recursive: true, force: true });
	fs.rmSync(__dirname + '/../built', { recursive: true, force: true });
})();
