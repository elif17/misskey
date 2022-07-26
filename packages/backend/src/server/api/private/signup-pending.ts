// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import Koa from 'koa';
import { Users, UserPendings, UserProfiles } from '@/models/index.js';
import { signup } from '../common/signup.js';
import signin from '../common/signin.js';

export default async (ctx: Koa.Context) => {
	const body = ctx.request.body;

	const code = body['code'];

	try {
		const pendingUser = await UserPendings.findOneByOrFail({ code });

		const { account, secret } = await signup({
			username: pendingUser.username,
			passwordHash: pendingUser.password,
		});

		UserPendings.delete({
			id: pendingUser.id,
		});

		const profile = await UserProfiles.findOneByOrFail({ userId: account.id });

		await UserProfiles.update({ userId: profile.userId }, {
			email: pendingUser.email,
			emailVerified: true,
			emailVerifyCode: null,
		});

		signin(ctx, account);
	} catch (e) {
		ctx.throw(400, e);
	}
};
