// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { User } from '@/models/entities/user.js';
import { NoteWatchings } from '@/models/index.js';
import { Note } from '@/models/entities/note.js';

export default async (me: User['id'], note: Note) => {
	await NoteWatchings.delete({
		noteId: note.id,
		userId: me,
	});
};
