// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { db } from '@/db/postgre.js';
import { PageLike } from '@/models/entities/page-like.js';
import { Pages } from '../index.js';
import { User } from '@/models/entities/user.js';

export const PageLikeRepository = db.getRepository(PageLike).extend({
	async pack(
		src: PageLike['id'] | PageLike,
		me?: { id: User['id'] } | null | undefined
	) {
		const like = typeof src === 'object' ? src : await this.findOneByOrFail({ id: src });

		return {
			id: like.id,
			page: await Pages.pack(like.page || like.pageId, me),
		};
	},

	packMany(
		likes: any[],
		me: { id: User['id'] }
	) {
		return Promise.all(likes.map(x => this.pack(x, me)));
	},
});
