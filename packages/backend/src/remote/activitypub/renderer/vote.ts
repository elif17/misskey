// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import config from '@/config/index.js';
import { Note } from '@/models/entities/note.js';
import { IRemoteUser, User } from '@/models/entities/user.js';
import { PollVote } from '@/models/entities/poll-vote.js';
import { Poll } from '@/models/entities/poll.js';

export default async function renderVote(user: { id: User['id'] }, vote: PollVote, note: Note, poll: Poll, pollOwner: IRemoteUser): Promise<any> {
	return {
		id: `${config.url}/users/${user.id}#votes/${vote.id}/activity`,
		actor: `${config.url}/users/${user.id}`,
		type: 'Create',
		to: [pollOwner.uri],
		published: new Date().toISOString(),
		object: {
			id: `${config.url}/users/${user.id}#votes/${vote.id}`,
			type: 'Note',
			attributedTo: `${config.url}/users/${user.id}`,
			to: [pollOwner.uri],
			inReplyTo: note.uri,
			name: poll.choices[vote.choice],
		},
	};
}
