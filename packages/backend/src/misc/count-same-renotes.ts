// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { Notes } from '@/models/index.js';

export async function countSameRenotes(userId: string, renoteId: string, excludeNoteId: string | undefined): Promise<number> {
	// 指定したユーザーの指定したノートのリノートがいくつあるか数える
	const query = Notes.createQueryBuilder('note')
		.where('note.userId = :userId', { userId })
		.andWhere('note.renoteId = :renoteId', { renoteId });

	// 指定した投稿を除く
	if (excludeNoteId) {
		query.andWhere('note.id != :excludeNoteId', { excludeNoteId });
	}

	return await query.getCount();
}
