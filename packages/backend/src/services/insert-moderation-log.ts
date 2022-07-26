// SPDX-FileCopyrightText: 2022 Shinoda Eiji, <syuilotan@yahoo.co.jp>, et al.
//
// SPDX-License-Identifier: AGPL-3.0-only

import { ModerationLogs } from '@/models/index.js';
import { genId } from '@/misc/gen-id.js';
import { User } from '@/models/entities/user.js';

export async function insertModerationLog(moderator: { id: User['id'] }, type: string, info?: Record<string, any>) {
	await ModerationLogs.insert({
		id: genId(),
		createdAt: new Date(),
		userId: moderator.id,
		type: type,
		info: info || {},
	});
}
