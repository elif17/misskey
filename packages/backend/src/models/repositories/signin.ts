// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { db } from '@/db/postgre.js';
import { Signin } from '@/models/entities/signin.js';

export const SigninRepository = db.getRepository(Signin).extend({
	async pack(
		src: Signin,
	) {
		return src;
	},
});
