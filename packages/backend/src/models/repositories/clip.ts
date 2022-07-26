// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { db } from '@/db/postgre.js';
import { Clip } from '@/models/entities/clip.js';
import { Packed } from '@/misc/schema.js';
import { Users } from '../index.js';
import { awaitAll } from '@/prelude/await-all.js';

export const ClipRepository = db.getRepository(Clip).extend({
	async pack(
		src: Clip['id'] | Clip,
	): Promise<Packed<'Clip'>> {
		const clip = typeof src === 'object' ? src : await this.findOneByOrFail({ id: src });

		return await awaitAll({
			id: clip.id,
			createdAt: clip.createdAt.toISOString(),
			userId: clip.userId,
			user: Users.pack(clip.user || clip.userId),
			name: clip.name,
			description: clip.description,
			isPublic: clip.isPublic,
		});
	},

	packMany(
		clips: Clip[],
	) {
		return Promise.all(clips.map(x => this.pack(x)));
	},
});

