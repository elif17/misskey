// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import config from '@/config/index.js';
import { ILocalUser } from '@/models/entities/user.js';
import { UserKeypair } from '@/models/entities/user-keypair.js';
import { createPublicKey } from 'node:crypto';

export default (user: ILocalUser, key: UserKeypair, postfix?: string) => ({
	id: `${config.url}/users/${user.id}${postfix || '/publickey'}`,
	type: 'Key',
	owner: `${config.url}/users/${user.id}`,
	publicKeyPem: createPublicKey(key.publicKey).export({
		type: 'spki',
		format: 'pem',
	}),
});
